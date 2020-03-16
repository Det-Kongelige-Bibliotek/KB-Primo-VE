class PrmLocationItemsAfterController {
    constructor($interval) {
        this.$interval = $interval;
    }

    activateFilter(intervalId) {
        let filterBtn1 = angular.element(document.querySelectorAll("prm-locations > div > button"));
        let filterBtn2 = angular.element(document.querySelectorAll("prm-location-items  div  button"));
        let filterDiv = angular.element(document.querySelectorAll("prm-locations-filter md-input-container"));

        if ((filterBtn1.length || filterBtn2.length) && !filterDiv.length) {
            this.$interval.cancel(intervalId);
            if (filterBtn1.length){
                filterBtn1.triggerHandler('click');
            }
            if (filterBtn2.length){
                filterBtn2.triggerHandler('click');
            }
        }else{
            if (filterDiv.length){
                this.$interval.cancel(intervalId);
            }
        }
    }

    $postLink() {
        let _this = this;
        this.$intervalId = this.$interval(function(){
            _this.activateFilter(_this.$intervalId);
        }, 500, 10);
    }
}

PrmLocationItemsAfterController.$inject = ['$interval'];

export let PrmLocationItemsAfterConfig = {
    name: 'prmLocationItemsAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmLocationItemsAfterController
    }
};