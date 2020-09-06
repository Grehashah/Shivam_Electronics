import forgotpwd from '../view/user/forgotPwd'
import signin from '../view/user/signIn'
import signup from '../view/user/signUp'
import dashboard from '../view/user/dashboard'
import userprofile from '../view/user/profile'
import userProductList from '../view/user/products'
import userProductDetails from '../view/user/productDetails'
import userCart from '../view/user/cart'
import userMyOrders from '../view/user/myOrders'
import userOrderHistory from '../view/user/orderHistory'
import addaddress from '../view/user/addaddress'
import addanotheraddress from '../view/user/addanotheraddress'
import updateaddress from '../view/user/updateAddress'
import termsAndConditions from '../view/user/termsAndConditions'
import TandC from '../view/user/tAndC'
import contactUS from '../view/user/contactus'
import pageNotFound from '../view/user/pageNotFound'

export default
  [
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/termsAndConditions',
      name: 'termsAndConditions',
      component: termsAndConditions
    },
    {
      path: '/contactUS',
      name: 'conatctUS',
      component: contactUS
    },
    {
      path: '/TandC',
      name: 'TadnC',
      component: TandC
    },
    {
      path: '/cart/checkout/addaddress',
      name: 'addaddress',
      component: addaddress
    },
    {
      path: '/cart/checkout/addaddress/addAnotherAddress',
      name: 'addanotheraddress',
      component: addanotheraddress
    },
    {
      path: '/cart/checkout/addaddress/updateAddress/:AddID',
      name: 'updateAddress',
      component: updateaddress
    },
    {
      path: '/forgotpwd',
      name: 'forgotpwd',
      component: forgotpwd
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: signup
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/profile',
      name: 'userProfile',
      component: userprofile
    },
    {
      path: '/products/:category',
      name: 'userProductList',
      component: userProductList
    },
    {
      path: '/products/:category/:id',
      name: 'userProductDetails',
      component: userProductDetails
    },
    {
      path: '/cart',
      name: 'userCart',
      component: userCart
    },
    {
      path: '/myorders',
      name: 'userMyOrders',
      component: userMyOrders
    },
    {
      path: '/myorders/history',
      name: 'userOrderHistory',
      component: userOrderHistory
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: pageNotFound
    }
  ]
