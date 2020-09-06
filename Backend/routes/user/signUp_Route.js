const express = require('express');
const signup = require('../../models/user/signUp');
const nodemailer = require('nodemailer');

const router = express.Router();
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shivamelectronics7757@gmail.com',
        pass: 'shivam@123'
    }
});

router.post('/sign-up', (req, res, next) => {

    var string = req.body.fname;
    var img = string.charAt(0).toUpperCase() + '.svg';
    signup.insertRecord(req.body,img, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            signup.findid((err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    var uid = row[0].UserID;
                    signup.insertRecord2(req.body, uid, (err, row) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send(row);
                        }
                    });
                }
            });
        }
    });
});

router.post('/emailVarification', (req, res, next) => {

    var OTP = Math.floor(Math.random() * (9999 - 1111) + 1111);
    var email = req.body.email;
    transport.sendMail(
        {
            to: email,
            from: 'Shivam-Electronics',
            subject: 'Email Varification',
            html: '<p>Your one time password for email varification is </p>' + OTP
        }).then(result1 => {
            res.send({
                OTP: OTP
            });
        }).catch(err => {
            res.send(err);
        });
});


module.exports = router;