import angular from 'angular';
import 'angular-ui-router';
import configRouter from './config.js';

let dependencies = [
  'ui.router'
];

angular
  .module('myApp', dependencies)
  .config(configRouter);
