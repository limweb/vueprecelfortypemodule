import Indexlayout from "../layout/indexlayout";
import NotFoundView from "../pages/p404";
import Home from "../pages/Home"; //lazy load
const routes = [{
        path: "/",
        component: Indexlayout,
        children: [{
            path: "home",
            alias: "", // for default Component view
            name: "home",
            component: Home
        }, ]
    },
    {
        path: "*",
        component: NotFoundView
    }
];
export default routes3;