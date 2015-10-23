describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('picobudget'));

  beforeEach(inject(($controller, $log) => {
    spyOn($log, 'info').and.callThrough();

    vm = $controller('MainController');
  }));

  it('should call foo and be equal to foo', inject($log => {
    $log.info('foo');
    expect(vm.test).toEqual('foo');
    expect($log.info).toHaveBeenCalled();
  }));
});
