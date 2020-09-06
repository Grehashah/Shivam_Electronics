const express = require("express");
const userSetup = require("../../models/user/userSetup");

const router = express.Router();
router.post("/user/products/mobile/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedMobile(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});

router.post("/user/getFnameLname", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      userSetup.getFnameLname(row[0].UserID, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            fname: row[0].FirstName,
            lname: row[0].LastName,
          });
        }
      });
    }
  });
});

router.get("/user/latestSoldProducts", (req, res, next) => {
  userSetup.latestSoldProducts((err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});

router.post("/user/products/fan/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedFan(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/speaker/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedSpeaker(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/flourmil/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedFlourmil(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/iron/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedIron(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/oven/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedOven(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post(
  "/user/products/washingmachine/getRelatedItems",
  (req, res, next) => {
    userSetup.getRelatedWashingMachine(req.body, (err, row) => {
      if (err) {
        res.send(err);
      } else {
        res.json(row);
      }
    });
  }
);
router.post(
  "/user/products/waterpurifier/getRelatedItems",
  (req, res, next) => {
    userSetup.getRelatedWaterPurifier(req.body, (err, row) => {
      if (err) {
        res.send(err);
      } else {
        res.json(row);
      }
    });
  }
);
router.post("/user/products/fridge/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedFridge(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/mixer/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedMixer(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/tv/getRelatedItems", (req, res, next) => {
  userSetup.getRelatedTV(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});

router.post("/user/products/mobile/getReviews", (req, res, next) => {
  userSetup.getMobileReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});

router.post("/user/products/fan/getReviews", (req, res, next) => {
  userSetup.getFanReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/fridge/getReviews", (req, res, next) => {
  userSetup.getFridgeReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/flourmil/getReviews", (req, res, next) => {
  userSetup.getFlourmilReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/washingmachine/getReviews", (req, res, next) => {
  userSetup.getWashingMachineReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/iron/getReviews", (req, res, next) => {
  userSetup.getIronReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/oven/getReviews", (req, res, next) => {
  userSetup.getOvenReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/speaker/getReviews", (req, res, next) => {
  userSetup.getSpeakerReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/mixer/getReviews", (req, res, next) => {
  userSetup.getMixerReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/waterpurifier/getReviews", (req, res, next) => {
  userSetup.getWaterPurifierReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});
router.post("/user/products/tv/getReviews", (req, res, next) => {
  userSetup.getTVReview(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      res.json(row);
    }
  });
});

router.post("/user/products/reportReview", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      let uid = row[0].UserID;

      userSetup.checkReviewTable(req.body, uid, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          if (row.length === 0) {
            userSetup.reportReview(req.body, uid, (err, row) => {
              if (err) {
                res.send(err);
              } else {
                res.send({
                  result: 1,
                });
              }
            });
          } else {
            res.send({
              result: -1,
            });
          }
        }
      });
    }
  });
});

router.post("/user/products/likeReview", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      let uid = row[0].UserID;

      userSetup.checkVoteTable(req.body, uid, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          if (row.length === 0) {
            userSetup.likeReview1(req.body, uid, (err, row) => {
              if (err) {
                res.send(err);
              } else {
                res.send({
                  result: 1,
                });
              }
            });
          } else {
            userSetup.likeReview2(req.body, uid, (err, row) => {
              if (err) {
                res.send(err);
              } else {
                res.send({
                  result: 1,
                });
              }
            });
          }
        }
      });
    }
  });
});

router.post("/user/products/dislikeReview", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      let uid = row[0].UserID;

      userSetup.checkVoteTable(req.body, uid, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          if (row.length === 0) {
            userSetup.dislikeReview1(req.body, uid, (err, row) => {
              if (err) {
                res.send(err);
              } else {
                res.send({
                  result: 1,
                });
              }
            });
          } else {
            userSetup.dislikeReview2(req.body, uid, (err, row) => {
              if (err) {
                res.send(err);
              } else {
                res.send({
                  result: 1,
                });
              }
            });
          }
        }
      });
    }
  });
});

router.post("/user/products/addReview", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      let uid = row[0].UserID;

      userSetup.getCategoryID(req.body, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          let cid = row[0].CategoryID;

          userSetup.checkForReview(req.body, cid, uid, (err, row) => {
            if (err) {
              res.send(err);
            } else {
              if (row.length === 0) {
                userSetup.addReview(req.body, cid, uid, (err, row) => {
                  if (err) {
                    res.send(err);
                  } else {
                    res.send({
                      result: 1,
                    });
                  }
                });
              } else {
                res.send({
                  result: -1,
                });
              }
            }
          });
        }
      });
    }
  });
});

router.post("/user/addToCart", (req, res, next) => {
  userSetup.getID(req.body, (err, row) => {
    if (err) {
      res.send(err);
    } else {
      let uid = row[0].UserID;
      userSetup.getCategoryID(req.body, (err, row) => {
        if (err) {
          res.send(err);
        } else {
          let cid = row[0].CategoryID;
          userSetup.checkCart(uid, cid, req.body, (err, row) => {
            if (err) {
              res.send(err);
            } else {
              if (row.length === 0) {
                userSetup.addToCart(uid, cid, req.body, (err, row) => {
                  if (err) {
                    res.send(err);
                  } else {
                    res.send({
                      result: 1,
                    });
                  }
                });
              } else {
                var upQty = req.body.qty;
                upQty = parseInt(upQty) + row[0].Quantity;
                userSetup.updateCart(row[0].CartID, upQty, (err, row) => {
                  if (err) {
                    res.send(err);
                  } else {
                    res.send({
                      result: 1,
                    });
                  }
                });
              }
            }
          });
        }
      });
    }
  });
});

module.exports = router;
