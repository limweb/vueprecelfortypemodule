        const EventBus = new Vue({
            data() {
                return {};
            },
            computed: {
                scrwidth() {
                    return screen.width;
                },
                scrheight() {
                    return screen.height;
                },
                wdwidth() {
                    return window.innerHeight;
                },
                wdheight() {
                    return window.innerWidth;
                }
            },
            methods: {
                renderNumber(num) {
                    if ((num == null) | isNaN(num)) {
                        console.log("num is nul or nan =", num);
                        return 0;
                    } else {
                        return Number(num).toLocaleString("th-TH", {
                            minimumFractionDigits: 2
                        });
                    }
                }
            }
        });
        Vue.prototype.$bus = EventBus;
        var config = {
            apiKey: "AIzaSyC7Cq-Rg0iHeWX3wKaJvpJ7dBX-u-rLkZQ",
            authDomain: "around7th.firebaseapp.com",
            databaseURL: "https://around7th.firebaseio.com",
            projectId: "around7th",
            storageBucket: "around7th.appspot.com",
            messagingSenderId: "980520388945"
        };

        firebase.initializeApp(config);
        const store = new Vuex.Store({
            namespaced: true,
            state: {
                count: 0,
                overlay: "block"
            },
            mutations: {
                increment(state, val) {
                    console.log(state, val);
                    state.count += val;
                },
                show(state) {
                    state.overlay = "block";
                    console.log("store-----commit--show", state.overlay);
                },
                hide(state) {
                    state.overlay = "none";
                    console.log("store-----commit--hide", state.overlay);
                }
            },
            actions: {},
            getters: {
                overlaystyle: state => {
                    let ovr = {
                        display: state.overlay
                    };
                    console.log("overlay--", ovr);
                    return ovr;
                }
            },
            modules: {}
        });
        var vm = new Vue({
            store,
            mixins: [],
            data: {
                msg: 'FirebaseApp'
            },
            el: '#app',
            firebase: {
                bids: firebase.database().ref('around7th'),
                timmer: firebase.database().ref('timmer'),
            },
            methods: {},
            computed: {},
            watch: {},
            components: {},
            beforeCreate() { /* console.log('beforeCreate'); */ },
            created() { /* console.log('created'); */ },
            beforeMount() { /* console.log('beforeMount'); */ },
            mounted() { /* console.log('mounted'); */ },
            beforeUpdate() { /* console.log('beforeUpdate'); */ },
            updated() { /* console.log('updated'); */ },
            beforeDestroy() { /* console.log('beforeDestroy'); */ },
            destroyed() { /* console.log('destroyed'); */ },
        })

        console.log('----test-----');