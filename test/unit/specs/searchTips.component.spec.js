describe('searchTipsContoller,', function() {
  var $mdDialog, localeService, searchTipsContoller;

  beforeEach(module('viewCustom'));

  beforeEach(inject(function(_$mdDialog_, _$httpBackend_) {
    $mdDialog = _$mdDialog_;
    $httpBackend = _$httpBackend_;
    spyOn($mdDialog, 'show').and.callThrough();
  }));

  beforeEach(inject(function($componentController) {
    localeService = {};

    searchTipsController = $componentController('rexSearchTips', {
      localeService: localeService,
    });

  }));

  describe('when the selected language is English,', function() {
    
    beforeEach(function() {
      localeService.current = () => 'en_US';  
    });

    it('should display the English search tips.', function() {
      searchTipsController.showSearchTips();
      expect($mdDialog.show).toHaveBeenCalled();
      $httpBackend.expectGET('custom/NUI/html/searchTips_en_US.html').respond(200);
      $httpBackend.flush();
    });    
  });

  describe('when the selected language is Danish,', function() {
    
    beforeEach(function() {
      localeService.current = () => 'da_DK';  
    });

    it('should display the Danish search tips.', function() {
      searchTipsController.showSearchTips();
      expect($mdDialog.show).toHaveBeenCalled();
      $httpBackend.expectGET('custom/NUI/html/searchTips_da_DK.html').respond(200);
      $httpBackend.flush();
    });    
  });

});