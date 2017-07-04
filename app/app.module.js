import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/home.component.module';
import giphyDetail from './giphy-detail/giphy-detail.component.module'
import routing from './home/home.component.route';

require('./main.scss');

angular.module('app', [
    uirouter,
    'home',
    'giphyDetail'
])
.config(routing);
