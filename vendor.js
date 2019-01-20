//---ok-----
import Vue from "./node_modules/vue/dist/vue.esm.browser.js";

//---ok-----
import VueProgressBar from "./node_modules/vue-progressbar/dist/vue-progressbar.js";
window.VueProgressBar = VueProgressBar;

//---ok-----
import Vuex from "vuex";
window.Vuex = Vuex;
Vue.use(Vuex);

import {
    directive as vClickOutside
} from 'vue-clickaway2'
Vue.directive('click-outside', vClickOutside)


import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

// import ("tachyons");

//---ok-----
import axios from "axios";
window.axios = axios;
Vue.prototype.$http = axios;
Vue.prototype.$axios = axios;

//---ok-----
import * as sync from 'vuex-router-sync'
window.sync = sync;

//---ok-----
import VueRouter from "vue-router";
window.VueRouter = VueRouter;
Vue.use(VueRouter);

//---ok-----
import Cookies from "js-cookie";
Vue._Cookies = Cookies;
Vue.prototype.$cookies = Cookies;


//---ok-----
import Storage from "vue-ls";
let options = {
    namespace: "vuejs__", // key prefix
    name: "ls", // name variable Vue.[ls] or this.[$ls],
    storage: "local" // storage name session, local, memory
};
Vue.use(Storage, options);

//---ok-----
import vSelect from "vue-select";
Vue._vSelect = vSelect;

//---ok-----Vuex--plugin------------------------------------start---
import createPersistedState from "vuex-persistedstate";
Vue._createPersistedState = createPersistedState;

//--ok---
import VuexORM from '@vuex-orm/core';
Vue._VuexORM = VuexORM;

//--ok---
import vuexCache from 'vuex-cache'
Vue._vuexCache = vuexCache;

//--ok---
import VueWait from 'vue-wait';
Vue._VueWait = VueWait;

//--ok---
import vuexI18n from 'vuex-i18n';
Vue._vuexI18n = vuexI18n;

//--ok---
import createMutationsSharer from 'vuex-shared-mutations';
Vue._createMutationsSharer = createMutationsSharer;

//--ok---
import * as pathify from 'vuex-pathify';
Vue._pathify = pathify;

//---ok-----Vuex--plugin------------------------------------end---

// import VueMultianalytics from "vue-multianalytics";
// window.VueMultianalytics = VueMultianalytics;


//---ok-----
import collect from "collect.js";
Vue.prototype.$collect = collect;
Vue._collect = collect;

//---ok-----
import VueFire from "vuefire";
Vue.use(VueFire)

//---ok-----
import * as Vuexfire from "vuexfire/dist/vuexfire.esm.js";
window.Vuexfire = Vuexfire;
Vue._Vuexfire = Vuexfire;

//---ok-----
import firebase from 'firebase/dist/index.esm.js';
window.firebase = firebase;

//---ok-----
// import $ from "jquery";
// window.$ = $;
// window.jQuery = $;

// import * as adminlte from 'admin-lte/build/js/AdminLTE.js';
// window.adminlte = adminlte;
import Paginate from 'vuejs-paginate';
Vue.paginate = Paginate;
Vue.component('paginate', Vue.paginate);

import VueI18n from 'vue-i18n/dist/vue-i18n.esm.js';
Vue.use(VueI18n)
Vue._VueI18n = VueI18n;
window.Vue = Vue;


Vue.prototype.$crc = function(r) {
    if (typeof r != 'string') {
        r = JSON.stringify(r);
    }
    for (var a, o = [], c = 0; c < 256; c++) {
        a = c;
        for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
        o[c] = a
    }
    for (var n = -1, t = 0; t < r.length; t++) n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
    return (-1 ^ n) >>> 0
};


import {
    Base64
} from 'js-base64';
Vue._B64 = Base64;
Vue.prototype.$b64 = Base64;

//---google map ----
import * as VueGoogleMaps from 'vue2-google-maps'
Vue._Gmap = VueGoogleMaps;
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_API_TOKEN',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//   },
// })


//---ok-----
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue._VueQrcode = VueQrcode;
Vue.component(VueQrcode.name, VueQrcode);

//---ok-----
import VueBarcode from '@chenfengyuan/vue-barcode';
Vue._VueBarcode = VueBarcode;
Vue.component(VueBarcode.name, VueBarcode);

//---ok-----
import facebookLogin from 'facebook-login-vuejs';
Vue._facebookLogin = facebookLogin;
Vue.component('facebook-login', facebookLogin);

console.log('windows--->', window);
// console.log('windows--->', window);
