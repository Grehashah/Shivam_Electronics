const express = require('express');
const manage = require('../../models/admin/brands');

const router = express.Router();

router.get('/admin/Brand-List', (req, res, next) => {

    manage.getAll((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/addBrand', (req, res, next) => {

    manage.checkBrand(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let num = row.length;

            if (num === 0) {
                manage.addBrand(req.body, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({
                            result: 1
                        });
                    }
                });
            }
            else {
                res.send({
                    result: -1
                });
            }
        }
    });

});

router.post('/admin/getBrand', (req, res, next) => {

    manage.getBrand(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateBrand', (req, res, next) => {

    manage.updateBrand(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.post('/admin/unblockBrand', (req, res, next) => {

    manage.unblockBrand(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/removeBrand', (req, res, next) => {

    manage.removeBrand(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getFridge', (req, res, next) => {

    manage.getFridge(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateFridgeStatus1', (req, res, next) => {

    manage.updateFridgeStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getMobile', (req, res, next) => {

    manage.getFridge(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateMobileStatus1', (req, res, next) => {

    manage.updateMobileStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getFan', (req, res, next) => {

    manage.getFan(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateFanStatus1', (req, res, next) => {

    manage.updateFanStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getFlourmil', (req, res, next) => {

    manage.getFlourmil(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateFlourmilStatus1', (req, res, next) => {

    manage.updateFlourmilStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getIron', (req, res, next) => {

    manage.getIron(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateIronStatus1', (req, res, next) => {

    manage.updateIronStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getMixer', (req, res, next) => {

    manage.getMixer(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateMixerStatus1', (req, res, next) => {

    manage.updateMixerStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getOven', (req, res, next) => {

    manage.getOven(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateOvenStatus1', (req, res, next) => {

    manage.updateOvenStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getSpeaker', (req, res, next) => {

    manage.getSpeaker(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateSpeakerStatus1', (req, res, next) => {

    manage.updateSpeakerStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getTV', (req, res, next) => {

    manage.getTV(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateTVStatus1', (req, res, next) => {

    manage.updateTVStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getWM', (req, res, next) => {

    manage.getWM(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateWMStatus1', (req, res, next) => {

    manage.updateWMStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/getWP', (req, res, next) => {

    manage.getWP(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/updateWPStatus1', (req, res, next) => {

    manage.updateWPStatus1(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateFridgeStatus2', (req, res, next) => {

    manage.updateFridgeStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateMobileStatus2', (req, res, next) => {

    manage.updateMobileStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateFanStatus2', (req, res, next) => {

    manage.updateFanStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/updateFlourmilStatus2', (req, res, next) => {

    manage.updateFlourmilStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateIronStatus2', (req, res, next) => {

    manage.updateIronStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateMixerStatus2', (req, res, next) => {

    manage.updateMixerStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateOvenStatus2', (req, res, next) => {

    manage.updateOvenStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateSpeakerStatus2', (req, res, next) => {

    manage.updateSpeakerStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/updateTVStatus2', (req, res, next) => {

    manage.updateTVStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

router.post('/admin/updateWMStatus2', (req, res, next) => {

    manage.updateWMStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});


router.post('/admin/updateWPStatus2', (req, res, next) => {

    manage.updateWPStatus2(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            })
        }
    });
});

module.exports = router;