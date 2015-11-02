export class MainController {
  constructor($modal) {
    'ngInject';

    this.modal = $modal;
    this.modalComponentElement = '<pb-login></pb-login>';
  }

  openLogin() {
    this.modal.open({
      template: this.modalComponentElement
    });
  }
}
