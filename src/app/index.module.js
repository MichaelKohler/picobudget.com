import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DashboardController } from './components/dashboard/dashboard.controller';
import { UserService } from './components/user/user.service';

angular.module('picobudget', ['ngResource', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('UserService', UserService)
  .controller('MainController', MainController)
  .controller('DashboardController', DashboardController);
