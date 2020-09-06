import adforgotpwd from "../view/admin/forgotPwd";
import adsignin from "../view/admin/signIn";
import addashboard from "../view/admin/dashboard";
import empdashboard from "../view/subadmin/dashboard";
import manageEmps from "../view/admin/manageSubAdmin";
import manageProducts from "../view/admin/manageProducts";
import manageProduct from "../view/admin/manageProduct";
import submanageProducts from "../view/subadmin/manageProducts";
import submanageProduct from "../view/subadmin/manageProduct";
import addEmp from "../view/admin/AddSubAdmin";
import updateEmp from "../view/admin/updateSubAdmin";
import deleteEmp from "../view/admin/deleteSubAdmin";
import empsignIn from "../view/subadmin/signIn";
import empfogotPwd from "../view/subadmin/forgotPwd";
import adminDeleteProduct from "../view/admin/deleteProduct";
import adminUpdateProduct from "../view/admin/updateProduct";
import adminAddProduct from "../view/admin/addProduct";
import subadminDeleteProduct from "../view/subadmin/deleteProduct";
import subadminUpdateProduct from "../view/subadmin/updateProduct";
import subadminAddProduct from "../view/subadmin/addProduct";
import adprofile from "../view/admin/profile";
import subadprofile from "../view/subadmin/profile";
import subAdminOrders from "../view/subadmin/manageOrders";
import subAdminOrderDetails from "../view/subadmin/orderDetails";
import subAdminMakeInvoice from "../view/subadmin/makeInvoice";
import adminOrders from "../view/admin/manageOrders";
import adminOrderDetails from "../view/admin/orderDetails";
import adminMakeInvoice from "../view/admin/makeInvoice";
import adhistory from "../view/admin/history";
import admonthlyhistory from "../view/admin/monthlyDetailsHistory";
import admonthlyhistory2 from "../view/admin/monthlyDetailsHistory2";
import admonthlylist from "../view/admin/list1";
import admonthlylist1_1 from "../view/admin/list1_1";
import aduserhistory from "../view/admin/userDetailHistory";
import aduserhistorylist from "../view/admin/list2";
import adallhistorylist from "../view/admin/list3";
import adproducts from "../view/admin/products";
import adproductlist from "../view/admin/productlist";
import subadproducts from "../view/subadmin/products";
import subadproductlist from "../view/subadmin/productlist";
import adreview from "../view/admin/review";
import adreviewoptions from "../view/admin/reviewoptions";
import advotedetails from "../view/admin/votedetails";
import adunvotedetails from "../view/admin/unVoteDetails";
import adreportedreview from "../view/admin/reportedreview";
import adblockreview from "../view/admin/blockreview";
import adblockedreview from "../view/admin/blockedreview";
import adunblockreview from "../view/admin/unblockreview";
import pageNotFound from "../view/admin/pageNotFound";
import manageUsers from "../view/admin/manageUser";
import deleteUser from "../view/admin/deleteUser";
import unBlockUser from "../view/admin/unBlockUser";
import welcomePage from "../view/admin/welcomePage";
import reviewlikedislike from "../view/admin/reviewLikeDislike";
import managebrands from "../view/admin/manageBrands";
import updatebrands from "../view/admin/updateBrand";
import deletebrands from "../view/admin/deleteBrand";
import unblockbrands from "../view/admin/unblockBrand";
import managebrands2 from "../view/subadmin/manageBrands";
import updatebrands2 from "../view/subadmin/updateBrand";
import deletebrands2 from "../view/subadmin/deleteBrand";
import unblockbrands2 from "../view/subadmin/unblockBrand";
import userdetails from "../view/admin/userDetails";

export default [
  {
    path: "/admin-signin",
    name: "adsignin",
    component: adsignin
  },
  {
    path: "/",
    name: "welcomePage",
    component: welcomePage
  },
  {
    path: "*",
    name: "pageNotFound",
    component: pageNotFound
  },
  {
    path: "/subadmin-signin",
    name: "empsignIn",
    component: empsignIn
  },
  {
    path: "/admin/deleteUser/:userID",
    name: "deleteUser",
    component: deleteUser
  },
  {
    path: "/admin/unBlockUser/:userID",
    name: "unBlockUser",
    component: unBlockUser
  },
  {
    path: "/subadmin/orders",
    name: "subAdminOrders",
    component: subAdminOrders
  },
  {
    path: "/subadmin/orders/details/:id",
    name: "subAdminOrderDetails",
    component: subAdminOrderDetails
  },
  {
    path: "/subadmin/orders/makeInvoice/:id",
    name: "subAdminMakeInvoice",
    component: subAdminMakeInvoice
  },
  {
    path: "/admin/orders",
    name: "AdminOrders",
    component: adminOrders
  },
  {
    path: "/admin/orders/details/:id",
    name: "adminOrderDetails",
    component: adminOrderDetails
  },
  {
    path: "/admin/orders/makeInvoice/:id",
    name: "AdminMakeInvoice",
    component: adminMakeInvoice
  },
  {
    path: "/subadmin-forgotpwd",
    name: "empforgotpwd",
    component: empfogotPwd
  },
  {
    path: "/admin-forgotpwd",
    name: "adforgotpwd",
    component: adforgotpwd
  },
  {
    path: "/admin",
    name: "addashboard",
    component: addashboard
  },
  {
    path: "/subadmin",
    name: "subadmindashboard",
    component: empdashboard
  },
  {
    path: "/admin/manageEmployees",
    name: "manageEmployees",
    component: manageEmps
  },
  {
    path: "/admin/addEmployee",
    name: "addEmployee",
    component: addEmp
  },
  {
    path: "/admin/updateEmployee/:adminID",
    name: "updateEmployee",
    component: updateEmp
  },
  {
    path: "/admin/deleteEmployee/:adminID",
    name: "deleteEmp",
    component: deleteEmp
  },
  {
    path: "/admin/removeproduct/:product/:id",
    name: "admindeleteProduct",
    component: adminDeleteProduct
  },
  {
    path: "/admin/addproduct/:product",
    name: "adminaddProduct",
    component: adminAddProduct
  },
  {
    path: "/admin/updateproduct/:product/:id",
    name: "adminupdateProduct",
    component: adminUpdateProduct
  },
  {
    path: "/admin/manageProducts",
    name: "manageProducts",
    component: manageProducts
  },
  {
    path: "/admin/manageProducts/:product",
    name: "manageProduct",
    component: manageProduct
  },
  {
    path: "/subadmin/removeproduct/:product/:id",
    name: "subadmindeleteProduct",
    component: subadminDeleteProduct
  },
  {
    path: "/subadmin/addproduct/:product",
    name: "subadminaddProduct",
    component: subadminAddProduct
  },
  {
    path: "/subadmin/updateproduct/:product/:id",
    name: "subadminupdateProduct",
    component: subadminUpdateProduct
  },
  {
    path: "/subadmin/manageProducts",
    name: "submanageProducts",
    component: submanageProducts
  },
  {
    path: "/subadmin/manageProducts/:product",
    name: "submanageProduct",
    component: submanageProduct
  },
  {
    path: "/admin/profile",
    name: "adProfile",
    component: adprofile
  },
  {
    path: "/subadmin/profile",
    name: "subadProfile",
    component: subadprofile
  },
  {
    path: "/admin/history",
    name: "addHistory",
    component: adhistory
  },
  {
    path: "/admin/history/monthlydetails",
    name: "addMonthlyHistory",
    component: admonthlyhistory
  },
  {
    path: "/admin/history/monthlydetails2",
    name: "addMonthlyHistory2",
    component: admonthlyhistory2
  },
  {
    path: "/admin/history/monthlydetails/list1/:mntno",
    name: "addMonthlyHistoryList",
    component: admonthlylist
  },
  {
    path: "/admin/history/monthlydetails2/list1_1/:mntno/:year",
    name: "addMonthlyHistoryList1_1",
    component: admonthlylist1_1
  },
  {
    path: "/admin/history/userdetailshistory",
    name: "addUserDetailsHistory",
    component: aduserhistory
  },
  {
    path: "/admin/history/userdetailshistory/list2/:userid",
    name: "addUserDetailsHistoryList",
    component: aduserhistorylist
  },
  {
    path: "/admin/history/list3",
    name: "addAllHistoryList",
    component: adallhistorylist
  },
  {
    path: "/admin/products",
    name: "addProducts",
    component: adproducts
  },
  {
    path: "/admin/products/productlist/:cid",
    name: "addProductList",
    component: adproductlist
  },
  {
    path: "/subadmin/products",
    name: "subaddProducts",
    component: subadproducts
  },
  {
    path: "/subadmin/products/productlist/:cid",
    name: "subaddProductList",
    component: subadproductlist
  },
  {
    path: "/admin/reviewoptions/review",
    name: "adreview",
    component: adreview
  },
  {
    path: "/admin/reviewoptions",
    name: "adReviewOptions",
    component: adreviewoptions
  },
  {
    path: "/admin/reviewoptions/review/reviewlikedislike/votedetails/:rid",
    name: "adReviewVoteDetails",
    component: advotedetails
  },
  {
    path: "/admin/reviewoptions/review/reviewlikedislike/unvotedetails/:rid",
    name: "adReviewUnVoteDetails",
    component: adunvotedetails
  },
  {
    path: "/admin/reviewoptions/review/reviewlikedislike/:rid",
    name: "adReviewLikeDislike",
    component: reviewlikedislike
  },
  {
    path: "/admin/reviewoptions/reportedreview",
    name: "adReportedReview",
    component: adreportedreview
  },
  {
    path: "/admin/reviewoptions/reportedreview/blockreview/:rid",
    name: "adBlockReview",
    component: adblockreview
  },
  {
    path: "/admin/reviewoptions/blockedreview",
    name: "adBlockedReview",
    component: adblockedreview
  },
  {
    path: "/admin/reviewoptions/blockedreview/unblockreview/:rid",
    name: "adUnBlockReview",
    component: adunblockreview
  },
  {
    path: "/admin/manageUsers",
    name: "manageUsers",
    component: manageUsers
  },
  {
    path: "/admin/manageBrands",
    name: "manageBrands",
    component: managebrands
  },
  {
    path: "/admin/updateBrand/:brandID",
    name: "updateBrand",
    component: updatebrands
  },
  {
    path: "/admin/deleteBrand/:brandID",
    name: "deleteBrand",
    component: deletebrands
  },
  {
    path: "/admin/unblockBrand/:brandID",
    name: "unblockBrand",
    component: unblockbrands
  },
  {
    path: "/subadmin/manageBrands",
    name: "manageBrands",
    component: managebrands2
  },
  {
    path: "/subadmin/updateBrand/:brandID",
    name: "updateBrand",
    component: updatebrands2
  },
  {
    path: "/subadmin/deleteBrand/:brandID",
    name: "deleteBrand",
    component: deletebrands2
  },
  {
    path: "/subadmin/unblockBrand/:brandID",
    name: "unblockBrand",
    component: unblockbrands2
  },
  {
    path: "/admin/manageUsers/userDetails/:id",
    name: "userDetails",
    component: userdetails
  }
];
