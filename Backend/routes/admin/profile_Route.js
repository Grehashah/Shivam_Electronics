const express = require('express');
const profile1 = require('../../models/admin/profile');
const csrf = require('csurf');
const multer = require('multer');
const config = csrf();

const router = express.Router();

router.post('/admin/profile', (req, res, next) => {

    profile1.prodetails(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/update-profile', (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    profile1.updatedetails(req.body, dateTime, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {

            profile1.updatedetails2(req.body, dateTime, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(row);
                }
            });
        }
    });
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/admin');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'admin' + '_' + Date.now() + ext);
    }
});


const fileupload = (multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));

router.post('/admin/profile/uploadImage', fileupload, (req, res, next) => {
    const image = req.file;
    if (!image) {
        res.send({
            result: -1
        });
    }
    else {
        res.send({
            result: 1,
            name: image.filename
        });
    };
});

module.exports = router;