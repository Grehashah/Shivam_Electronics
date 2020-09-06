const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// importing routes
const forgotpwd = require('./routes/user/forgotPwd_Route');
const signin = require('./routes/user/signIn_Route');
const signup = require('./routes/user/signUp_Route');
const adforgotpwd = require('./routes/admin/forgotPwd_Route');
const adsignin = require('./routes/admin/signIn_Route');
const userEmailVarify = require('./routes/user/email_varify');
const manageSubAdmin = require('./routes/admin/manageSubAdmin');
const empsin = require('./routes/subadmin/signIn_Route');
const empforgot = require('./routes/subadmin/forgotPwd_Route');
const adminManageProduct = require('./routes/admin/manageProduct');
const subadminManageProduct = require('./routes/subadmin/manageProduct');
const empProfile = require('./routes/subadmin/profile_Route');
const adminProfile = require('./routes/admin/profile_Route');
const userProfile = require('./routes/user/profile_Route');
const subManageOrders = require('./routes/subadmin/manageOrders');
const adminManageOrders = require('./routes/admin/manageOrders');
const adminHistoryRoute = require('./routes/admin/monthyHistoryList_Route');
const adminDashboard = require('./routes/admin/dashboard_Route');
const subadminDashboard = require('./routes/subadmin/dashboard_Route');
const adminReview = require('./routes/admin/review_Route');
const userSetup = require('./routes/user/userSetup_Route');
const userProducts = require('./routes/user/products_Route');
const userCart = require('./routes/user/cart_Route');
const userMyOrders = require('./routes/user/myOrders_Route');
const address = require('./routes/user/address_Route');
const userCheckOut = require('./routes/user/checkOut_Route');
const manageUsers = require('./routes/admin/manageUser_Route');
const manageBrands = require('./routes/admin/brands_Route');


app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setting routes
app.use(forgotpwd);
app.use(signin);
app.use(adforgotpwd);
app.use(adsignin);
app.use(signup);
app.use(userEmailVarify);
app.use(manageSubAdmin);
app.use(empsin);
app.use(empforgot);
app.use(adminProfile);
app.use(empProfile);
app.use(userProfile);
app.use(adminManageProduct);
app.use(subadminManageProduct);
app.use(adminManageOrders);
app.use(subManageOrders);
app.use(adminHistoryRoute);
app.use(adminDashboard);
app.use(subadminDashboard);
app.use(adminReview);
app.use(userSetup);
app.use(userProducts);
app.use(userCart);
app.use(userMyOrders);
app.use(address);
app.use(userCheckOut);
app.use(manageUsers);
app.use(manageBrands);

//for getting images and other resources
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8081)

