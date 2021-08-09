import Vue from 'vue';
import Router from 'vue-router';
import TermDetail from "../components/TermDetail";
import Annotate from "../components/Annotate";
import Landing from "../components/Landing-existing";
import About from "../components/About";
// import BIDSTerms from "../components/terms/BIDSTerms";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/interlex/search?q=:term',
            name: 'TermDetail',
            component: TermDetail,
        },
        // {
        //     path: '/explore',
        //     name: 'Explore',
        //     component: Annotate,
        // },
        // {
        //     path: '/create',
        //     name: 'Create',
        //     component: Annotate,
        // },
        {
            path: '/annotate',
            name: 'Annotate',
            component: Annotate,
        },
        // {
        //     path: '/BIDS-terms',
        //     redirect: 'https://nidm-terms.github.io/',
        //     name: 'BIDSTerms',
        //     component: BIDSTerms,
        // },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ],
});
