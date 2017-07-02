// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import Home from './views/HomeView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'

Vue.use(Router)

// Story view factory
function createStoriesView(type) {
    return {
        name: `${type}-stories-view`,
        render (createElement) {
            return createElement(StoriesView, {props: {type}})
        }
    }
}

let setPath = (item) => {
    if (!item.path) {
        item.path = "/" + item.name
    }
    if (item.children && item.children.length > 0) {
        item.children.forEach(a => setPath(a))
    }
};

let setRouterPath = function (routers) {
    routers.forEach(a => setPath(a))
};


let routes = [
    {name: "main", component: require("./views/HomeView.vue")},
    {name: 'login', component: require("./views/LoginView.vue")},
    {name: 'user', component: UserView},
    {name: "home", path: '/', redirect: '/main'}
];
setRouterPath(routes);

export default new Router({
    routes
})
