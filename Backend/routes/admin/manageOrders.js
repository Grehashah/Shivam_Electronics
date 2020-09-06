const express = require('express');
const orders = require('../../models/admin/manageOrders');
const nodemailer = require('nodemailer');
const csrf = require('csurf');
const multer = require('multer');
const config = csrf();

const router = express.Router();

//For Email Sending Process
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shivamelectronics7757@gmail.com',
        pass: 'shivam@123'
    }
});
router.get('/admin/newOrders', (req, res, next) => {

    orders.getNewOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/acceptedOrders', (req, res, next) => {

    orders.getAcceptedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/canceledOrders', (req, res, next) => {

    orders.getCanceledOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/completedOrders', (req, res, next) => {

    orders.getCompletedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/underShipmentOrders', (req, res, next) => {

    orders.getUnderShipmentOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/rejectedOrders', (req, res, next) => {

    orders.getRejectedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/admin/order/accept', (req, res, next) => {

    orders.acceptOrder(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result: 1
            });
        }
    });
});

router.post('/admin/order/reject', (req, res, next) => {

    orders.rejectOrder(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {

            transport.sendMail(
                {
                    to: req.body.email,
                    from: 'Shivam-Electronics',
                    subject: 'Rejection of Order',
                    html: '<p>Your Order for ' + req.body.categoryName + ' of Quantity ' + req.body.qty + ' on ' + req.body.orderDateTime + ' has been Rejected because of some issues. <br> You will get your amount of ₹ ' + req.body.netAmount + ' within 7 days. <br> Thank you. </p>'
                }
            ).then(row => {
                res.send({
                    result: 1
                });
            }
            )
                .catch(err => {
                    res.send(err);
                });
        }
    });
});

router.post('/admin/order/underShipment', (req, res, next) => {

    orders.underShipmentOrder(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result: 1
            });
        }
    });
});

router.post('/admin/order/complete', (req, res, next) => {

    orders.completeOrder(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result: 1
            });
        }
    });
});

router.post('/admin/order/orderDetails', (req, res, next) => {

    orders.orderDetails(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/order/customerDetails/:choice', (req, res, next) => {

    let choice1 = req.params.choice;
    orders.customerDetails(choice1, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/order/addressDetails/:choice', (req, res, next) => {

    let choice1 = req.params.choice;
    orders.addressDetails(choice1, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/order/productDetails', (req, res, next) => {

    orders.productDetails(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let productID = row[0].ProductID;
            let categoryID = row[0].Name;

            if (categoryID === "fan") {
                orders.fanDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "mobile") {
                orders.mobileDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "flourmil") {
                orders.flourmilDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "fridge") {
                orders.fridgeDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "tv") {
                orders.TVDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "iron") {
                orders.ironDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "oven") {
                orders.ovenDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "mixer") {
                orders.mixerDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "washingmachine") {
                orders.washingMachineDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "waterpurifier") {
                orders.waterPurifierDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
            else if (categoryID === "speaker") {
                orders.speakerDetails(productID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.json(row);
                    }
                });
            }
        }
    });
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'application/pdf') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/invoice');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'invoice' + '_' + Date.now() + ext);
    }
});


const upload = (multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));

router.post('/admin/order/uploadInvoice', upload, (req, res, next) => {
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
    }
});

router.post('/admin/order/updateInvoice', upload, (req, res, next) => {
    orders.updateInvoice(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result: 1
            });
        }
    });
});

router.post('/admin/order/changeShipDateTime', (req, res, next) => {

    orders.changeShipDateTime(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result: 1
            });
        }
    });
});


module.exports = router;