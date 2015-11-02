import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DashboardController } from './components/dashboard/dashboard.controller';
import { UserService } from './components/user/user.service';
import { LoginDirective } from './components/login/login.directive';

angular.module('picobudget', ['ngResource', 'ngRoute', 'mm.foundation'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('UserService', UserService)
  .controller('MainController', MainController)
  .controller('DashboardController', DashboardController)
  .directive('pbLogin', LoginDirective);
