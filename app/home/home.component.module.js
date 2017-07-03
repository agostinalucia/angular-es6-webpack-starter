import angular from 'angular';
import component from './home.component';
import giphyService from './../services/giphy/giphy.service';
import pagerService from './../services/pager/pager.service';

angular
    .module('home', [])
    .component('home', component)
    .factory('giphyService', giphyService)
    .factory('pagerService', pagerService);