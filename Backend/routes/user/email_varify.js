const express = require('express');
const valid = require('../../models/user/email_varify');

const router = express.Router();

router.post('/sup-email', (req, res, next) => {

    valid.validEmail(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            var numrows = row.length;

            if (numrows == 0) {

                res.send({
                    result: 1
                });
            }
            else {
                res.send({
                    result: -1
                })
            }
        }
    });
});

module.exports = router;