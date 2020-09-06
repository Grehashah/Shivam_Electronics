const express = require('express');
const forgotpwd = require('../../models/admin/forgotPwd');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');

const router = express.Router();

const db = require('../../util/database');

//For Email Sending Process
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'shivamelectronics7757@gmail.com',
        pass : 'shivam@123' 
    }
});

router.post('/admin-forgotpwd', (req, res, next) => {

    forgotpwd.getadmin(req.body, (err, result) => {

        if (err) {
            res.send(err);
        }
        else {
            var numrows = result.length;
            if (numrows == 0) {
                res.send({
                    result: -1
                });
            }
            else {
                var newpwd = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
                var email = req.body.email;
                transport.sendMail(
                    {
                        to: email,
                        from: 'Shivam-Electronics',
                        subject: 'Forgot Password',
                        html: '<p>Your New Password is </p>' + newpwd
                    }
                ).then(result1 => {
                    forgotpwd.updatePwd(newpwd, email, (err, result2) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send({
                                result: 1
                            });
                        }
                    })
                }
                )
                    .catch(err => {
                        res.send(err);
                    });
            }
        }
    });
});


module.exports = router;