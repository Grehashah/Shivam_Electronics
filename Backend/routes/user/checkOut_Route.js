const express = require('express');
const checkOut = require('../../models/user/checkOut');
const Razorpay = require('razorpay');

const nodemailer = require('nodemailer');

const router = express.Router();
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shivamelectronics7757@gmail.com',
        pass: 'shivam@123'
    }
});

const razorpayConfig = {
    key_id: 'rzp_test_jG7kHH2emV2Ihi',
    key_secret: 'HpJf085GPBhppYmCmB68a32b'
}

const instance = new Razorpay(razorpayConfig);

router.post('/user/cart/makePayment', (req, res, next) => {

    var options = {
        amount: req.body.finalAmt * 100,
        currency: "INR",
        receipt: "",
        payment_capture: '0'
    };

    instance.orders.create(options, function (err, order) {

        if (err) {
            res.send(err);
        }
        else {
            res.send({
                orderID: order
            })
        }
    });
});

router.post('/user/cart/capturePayment', (req, res, next) => {

    instance.payments.capture(req.body.id, parseInt(req.body.amount))
        .then(function (response) {
            res.send(response);
        })
        .catch(function (err) {
            res.send(err);
        });

});

router.post('/user/cart/orderEntry', (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    checkOut.getCartItems(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let n = row.length;
            let i = 0;

            while (i < n) {
                let CID = row[i].CategoryID;
                let PID = row[i].ProductID;
                let cartID = row[i].CartID
                let orderQTY = row[i].Quantity;

                checkOut.getCname(CID, (err, row) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        let cname = "";
                        cname = row[0].Name;
                        if (cname === "mobile") {
                            checkOut.getMobile(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setMobileQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Mobile <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Mobile <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        } else if (cname === "mixer") {
                            checkOut.getMixer(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setMixerQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Mixer <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Mixer <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "fan") {
                            checkOut.getFan(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setFanQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Fan <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Fan <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "flourmil") {
                            checkOut.getFlourmil(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setFlourmilQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = flourmil <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Flourmil <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "fridge") {
                            checkOut.getFridge(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setFridgeQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Fridge <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Fridge <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "washingmachine") {
                            checkOut.getWashingMachine(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setWashingMachineQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = WashingMachine <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = WashingMachine <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "waterpurifier") {
                            checkOut.getWaterPurifier(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setWaterPurifierQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = WaterPurifier <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = WaterPurifier <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "speaker") {
                            checkOut.getSpeaker(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setSpeakerQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Speaker <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Speaker <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "tv") {
                            checkOut.getTV(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setTVQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = TV <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = TV <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "iron") {
                            checkOut.getIron(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setIronQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Iron <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Iron <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else if (cname === "oven") {
                            checkOut.getOven(PID, (err, row) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    let price = 0;
                                    let discount = 0;
                                    let netamount = 0;
                                    let finalqty = 0;
                                    let qty = 0;

                                    price = row[0].Price;
                                    discount = row[0].Discount;
                                    qty = row[0].Quantity;
                                    price = price * orderQTY;
                                    discount = discount * orderQTY;
                                    netamount = price - discount;
                                    finalqty = qty - orderQTY;

                                    checkOut.setOvenQTY(PID, finalqty, (err, row) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {

                                            checkOut.deleteCartItem(cartID, (err, row) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                else {
                                                    const finalData = {
                                                        CategoryID: CID,
                                                        ProductID: PID,
                                                        Quantity: orderQTY,
                                                        UserID: req.body.userID,
                                                        AddressID: req.body.addID,
                                                        NetAmount: netamount,
                                                        Discount: discount,
                                                        TotalAmount: price,
                                                    };

                                                    checkOut.makeOrderEntry(finalData, dateTime, (err, row) => {
                                                        if (err) {
                                                            res.send(err);
                                                        }
                                                        else {
                                                            // email to shopkeeper
                                                            transport.sendMail(
                                                                {
                                                                    to: "shivamelectronics7757@gmail.com",
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Received',
                                                                    html: '<p>New Order has been received!!! <br> Product Category = Oven <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });

                                                            // email to Customer
                                                            transport.sendMail(
                                                                {
                                                                    to: req.body.email,
                                                                    from: 'Shivam-Electronics',
                                                                    subject: 'Order Placed',
                                                                    html: '<p>New Order has been Placed to Shivam Electronics!!! <br> Product Category = Oven <br> Quantity = ' + orderQTY + '<br> NetAmount = ' + netamount + '</p>'
                                                                }).then(result1 => {

                                                                }).catch(err => {
                                                                    res.send(err);
                                                                });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
                i++;
            }
            res.send({
                result: 1
            });
        }
    });
});


module.exports = router;