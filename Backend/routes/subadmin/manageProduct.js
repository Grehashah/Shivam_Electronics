const express = require('express');
const manage = require('../../models/subadmin/manageProduct');
const csrf = require('csurf');
const multer = require('multer');
const config = csrf();

const router = express.Router();

router.get('/subadmin/product/fan/list', (req, res, next) => {

    manage.getFan((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});



router.post('/subadmin/addBrand', (req, res, next) => {

    manage.checkBrand(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let num = row.length;

            if (num === 0) {
                manage.addBrand(req.body,(err, row) => {
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

router.get('/subadmin/product/fridge/list', (req, res, next) => {

    manage.getFridge((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/mixer/list', (req, res, next) => {

    manage.getMixer((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/speaker/list', (req, res, next) => {

    manage.getSpeaker((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/tv/list', (req, res, next) => {

    manage.getTV((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/flourmil/list', (req, res, next) => {

    manage.getFlourmil((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/iron/list', (req, res, next) => {

    manage.getIron((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/oven/list', (req, res, next) => {

    manage.getOven((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/washingmachine/list', (req, res, next) => {

    manage.getWashingMachine((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/waterpurifier/list', (req, res, next) => {

    manage.getWaterPurifier((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/subadmin/product/mobile/list', (req, res, next) => {

    manage.getMobile((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.delete('/subadmin/deleteproduct/fan/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeFan(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});

router.delete('/subadmin/deleteproduct/tv/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeTV(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/mobile/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeMobile(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/flourmil/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeFlourmil(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/speaker/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeSpeaker(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/waterpurifier/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeWaterPurifier(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/oven/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeOven(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/iron/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeIron(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/mixer/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeMixer(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/washingmachine/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeWashingMachine(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.delete('/subadmin/deleteproduct/fridge/:id', (req, res, next) => {

    let id1 = req.params.id;
    manage.removeFridge(id1,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});

router.post('/subadmin/addproduct/fan', (req, res, next) => {

    manage.addFan(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/flourmil', (req, res, next) => {

    manage.addFlourmil(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/mixer', (req, res, next) => {

    manage.addMixer(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/washingmachine', (req, res, next) => {

    manage.addWashingMachine(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/waterpurifier', (req, res, next) => {

    manage.addWaterPurifier(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/speaker', (req, res, next) => {

    manage.addSpeaker(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/iron', (req, res, next) => {

    manage.addIron(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/oven', (req, res, next) => {

    manage.addOven(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/tv', (req, res, next) => {

    manage.addTV(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/mobile', (req, res, next) => {

    manage.addMobile(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/addproduct/fridge', (req, res, next) => {

    manage.addFridge(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});

router.get('/subadmin/manageproduct/brands', (req, res, next) => {

    manage.getBrands((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/subadmin/getproduct/fan', (req, res, next) => {

    manage.getFan1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/subadmin/getproduct/tv', (req, res, next) => {

    manage.getTV1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/oven', (req, res, next) => {

    manage.getOven1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/iron', (req, res, next) => {

    manage.getIron1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/mixer', (req, res, next) => {

    manage.getMixer1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/waterpurifier', (req, res, next) => {

    manage.getWaterPurifier1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/washingmachine', (req, res, next) => {

    manage.getWashingMachine1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/speaker', (req, res, next) => {

    manage.getSpeaker1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/flourmil', (req, res, next) => {

    manage.getFlourmil1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/mobile', (req, res, next) => {

    manage.getMobile1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});
router.post('/subadmin/getproduct/fridge', (req, res, next) => {

    manage.getFridge1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/subadmin/updateproduct/fan', (req, res, next) => {

    manage.updateFan(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/fridge', (req, res, next) => {

    manage.updateFridge(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/mixer', (req, res, next) => {

    manage.updateMixer(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/washingmachine', (req, res, next) => {

    manage.updateWashingMachine(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/waterpurifier', (req, res, next) => {

    manage.updateWaterPurifier(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/iron', (req, res, next) => {

    manage.updateIron(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/oven', (req, res, next) => {

    manage.updateOven(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/tv', (req, res, next) => {

    manage.updateTV(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/mobile', (req, res, next) => {

    manage.updateMobile(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/flourmil', (req, res, next) => {

    manage.updateFlourmil(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});
router.post('/subadmin/updateproduct/speaker', (req, res, next) => {

    manage.updateSpeaker(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result : 1
            });
        }
    });
});

//Image Upload
const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const fanfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/fan');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'fan' + '_' + Date.now() + ext);
    }
});


const fanupload = (multer({ storage: fanfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadFanImage', fanupload, (req, res, next) => {
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


const flourmilfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/flourmil');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'flourmil' + '_' + Date.now() + ext);
    }
});


const flourmilupload = (multer({ storage: flourmilfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadFlourmilImage', flourmilupload, (req, res, next) => {
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

const mobilefileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/mobile');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'mobile' + '_' + Date.now() + ext);
    }
});


const mobileupload = (multer({ storage: mobilefileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadMobileImage', mobileupload, (req, res, next) => {
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

const speakerfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/speaker');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'speaker' + '_' + Date.now() + ext);
    }
});


const speakerupload = (multer({ storage: speakerfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadSpeakerImage', speakerupload, (req, res, next) => {
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

const tvfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/tv');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'tv' + '_' + Date.now() + ext);
    }
});


const tvupload = (multer({ storage: tvfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadTVImage', tvupload, (req, res, next) => {
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

const washingmachinefileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/washingmachine');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'wm' + '_' + Date.now() + ext);
    }
});


const washingmachineupload = (multer({ storage: washingmachinefileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadWashingMachineImage', washingmachineupload, (req, res, next) => {
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

const waterpurifierfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/waterpurifier');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'wp' + '_' + Date.now() + ext);
    }
});


const waterpurifierupload = (multer({ storage: waterpurifierfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadWaterPurifierImage', waterpurifierupload, (req, res, next) => {
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

const mixerfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/mixer');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'mixer' + '_' + Date.now() + ext);
    }
});


const mixerupload = (multer({ storage: mixerfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadMixerImage', mixerupload, (req, res, next) => {
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

const ironfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/iron');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'iron' + '_' + Date.now() + ext);
    }
});


const ironupload = (multer({ storage: ironfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadIronImage', ironupload, (req, res, next) => {
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

const ovenfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/oven');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'oven' + '_' + Date.now() + ext);
    }
});


const ovenupload = (multer({ storage: ovenfileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadOvenImage', ovenupload, (req, res, next) => {
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

const fridgefileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/products/fridge');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'fridge' + '_' + Date.now() + ext);
    }
});


const fridgeupload = (multer({ storage: fridgefileStorage, fileFilter: fileFilter }).single('file'));

router.post('/subadmin/uploadFridgeImage', fridgeupload, (req, res, next) => {
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