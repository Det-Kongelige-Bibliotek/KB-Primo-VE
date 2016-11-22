angular.module('viewCustom').component('prmFullViewAfter', {
  bindings: {
    parentCtrl: '<',
  },
  controller: ['sectionOrdering', function(sectionOrdering) {
    var ctrl = this;

    ctrl.$onInit = function() {
      // Commenting this out as the request link should not be removed any more.
      if (sectionOrdering(ctrl.parentCtrl)) console.log('REX: Sections reordered.');
    };
  }]
});