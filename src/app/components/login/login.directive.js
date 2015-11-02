export function LoginDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        extraValues: '='
    },
    templateUrl: '/app/components/login/login.html',
    controller: LoginController,
    controllerAs: 'login'
  };

  class LoginController {
    constructor(UserService) {
      'ngInject';

      this.userService = UserService();
      this.warningShown = false;
    }

    validateUsername() {
      return this.userService.validateUsername(this.email);
    }

    login() {
      if (this.validateUsername()) {
        console.log('logging in!!');
      } else {
        this.warningShown = true;
      }
    }

    signup() {
      console.log('registering..');
    }
  }

  return directive;
}
