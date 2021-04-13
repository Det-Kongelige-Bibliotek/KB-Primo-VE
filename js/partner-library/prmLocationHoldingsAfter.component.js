class PrmLocationHoldingsAfterController {
    constructor($interval, $mdDialog, $location) {
        this.$location = $location;
        this.$interval = $interval;
        this.$mdDialog = $mdDialog;
        this.lang = '';
    }

    addScriptToButton(intervalId) {
        let _this = this;
        // Do not continue, if the aub (Alborg university bibliotek) button har already been added
        let aub = document.getElementById('aub');
        if(!aub){
            // Get the Register button by its span's translate attribute (I couldn't find any other unique attribute)
            let btn = angular.element(document.querySelectorAll("prm-location-items button span[translate='fulldisplay.otherLocations.register']")).parent();
            // Get the Register button's span (span is inside the button)
            let node = document.querySelectorAll("prm-location-items button span[translate='fulldisplay.otherLocations.register']");
            if(btn.length && node.length){
                let button = document.createElement("button");
                button.id = "aub";
                button.addEventListener("click", function(event){
                    _this.openDialog(event);
                });
                btn[0].disabled = true;
                node[0].appendChild(button);
                btn[0].addEventListener("click", function(event){
                    event.stopPropagation();
                });
                this.$interval.cancel(intervalId);
            }
        }
    }

    openDialog(event){
        let texts = {
            da:{
                title:'Giver du os tilladelse til at sende dine oplysninger til vores partner',
                ariaLabel:'Giver du os tilladelse til at sende dine oplysninger til vores partner',
                confirm: 'Ja',
                reject: 'Nej'
            },
            en:{
                title:'Do you give us the permission to send your information to our partner?',
                ariaLabel:'Do you give us the permission to send your information to our partner?',
                confirm: 'Yes',
                reject: 'No'
            }
        };
        let dialog = this.$mdDialog.confirm()
            .title(texts[this.lang].title)
            // .textContent('')
            .ariaLabel(texts[this.lang].ariaLabel)
            .targetEvent(event)
            .ok(texts[this.lang].confirm)
            .cancel(texts[this.lang].reject);
        this.$mdDialog.show(dialog).then(
            function () {
                let btn = angular.element(document.querySelectorAll("prm-location-items button span[translate='fulldisplay.otherLocations.register']")).parent();
                btn[0].disabled = false;
                btn[0].click();
            },
            function () {});
    }

    $postLink() {
        this.lang = this.$location.search().lang;
        let _this = this;
        this.$intervalId = this.$interval(function(){
            _this.addScriptToButton(_this.$intervalId);
        }, 500, 5);
    }
}

PrmLocationHoldingsAfterController.$inject = ['$interval', '$mdDialog', '$location'];

export let PrmLocationHoldingsAfterConfig = {
    name: 'prmLocationHoldingsAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmLocationHoldingsAfterController
    }
};