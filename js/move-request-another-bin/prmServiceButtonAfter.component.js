class PrmServiceButtonAfterController {
    constructor($element, $interval) {
        this.$element = $element;
        this.$interval = $interval;
    };
    $postLink() {
        let _this = this;
        this.intervalId = this.$interval(function(){
            _this.hidePickupInstitution(_this);

            let AlmaRequestOther = angular.element(document.querySelector("span[translate='AlmaRequestOther']"));
            if(AlmaRequestOther.length){
                _this.$interval.cancel(_this.intervalId);
                _this.intervalId = undefined;
                AlmaRequestOther = AlmaRequestOther.parent().parent();
                if(AlmaRequestOther[0].textContent === angular.element(_this.$element.parent())[0].textContent){
                    let container = AlmaRequestOther.parent();
                    while ((!container.hasClass("section-body"))&&(container[0].tagName !== "BODY")){
                        container = container.parent();
                    }
                    container.append(AlmaRequestOther.parent());
                    AlmaRequestOther.parent().addClass('orderAtTheBottom');
                    AlmaRequestOther.parent().css('float','right');
                    let requestButtons = angular.element(document.querySelectorAll("span[translate='AlmaItemRequest']"));
                    for (let i = 0; i < requestButtons.length; i++) {
                        requestButtons[i].addEventListener("click", function(){
                            if(document.getElementsByClassName("orderAtTheBottom") && document.getElementsByClassName("orderAtTheBottom").length){
                                AlmaRequestOther.css('display', 'none');
                            }

                        });
                    }
                    let backButtons = angular.element(document.querySelectorAll("prm-opac-back-button button"));
                    for (let i = 0; i < backButtons.length; i++) {
                        backButtons[i].addEventListener("click", function(){
                            if(document.getElementsByClassName("orderAtTheBottom") && document.getElementsByClassName("orderAtTheBottom").length){
                                document.getElementsByClassName("orderAtTheBottom")[0].remove();
                                AlmaRequestOther.css('display', 'inline-block');
                            }

                        });
                    }
                }
            }
        }, 500, 5);
    };

    hidePickupInstitution (_this){
        let parentElement = _this.$element.parent()[0];
        let container = angular.element(parentElement)[0].children[0];
        if (angular.element(container).hasClass("button-as-link")){
            container.addEventListener("click", function(){
                _this.intervalId2 = _this.$interval(function(){
                    let formFields = angular.element(document.querySelectorAll("prm-form-field"));
                    if(formFields.length){
                        _this.$interval.cancel(_this.intervalId2);
                        _this.intervalId2 = undefined;
                        if (angular.element(formFields[1].querySelectorAll("md-select[name='pickupInstitution']"))){
                            let pickupInstitution = formFields[1];
                            angular.element(pickupInstitution).css('display', 'none');
                        }
                    }
                }, 500, 3);

            });
        }
    }
}

PrmServiceButtonAfterController.$inject = ['$element', '$interval'];

export let PrmServiceButtonAfterConfig = {
    name: 'prmServiceButtonAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmServiceButtonAfterController,
    },
}