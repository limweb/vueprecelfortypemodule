// window.$ = window.jQuery = require('jquery');
// window.adminlte = require('admin-lte');
import App from "./pages/app.vue";
import store from "./stores/index.js";
import router from "./routes/router.js";
window.vm = new Vue({
    el: "#app",
    store,
    router,
    template: `<App/>`,
    created() {
        console.log("vue create", this);
    },
    components: {
        App
    }
});