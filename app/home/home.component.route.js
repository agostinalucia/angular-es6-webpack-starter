function homeRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('giphy', {
            url: '/giphy',
            component: 'home'
        })
        .state('giphy.detail', {
            url: '/:id',
            component: 'giphyDetail'
        });
    $urlRouterProvider.otherwise('/giphy');
}

export default homeRoutes;