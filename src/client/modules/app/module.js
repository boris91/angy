import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appConfig from 'modules/app/config';
import postsFactory from 'modules/app/factories/posts';
import AppController from 'modules/app/controller';

angular
	.module('AppModule', [uiRouter])
	.config(appConfig)
	.controller('AppController', AppController)
	.factory('postsFactory', postsFactory);