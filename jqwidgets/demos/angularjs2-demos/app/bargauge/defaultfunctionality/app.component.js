System.register(['@angular/core', '../../../../../jqwidgets-ts/angular_jqxbargauge'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular_jqxbargauge_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular_jqxbargauge_1_1) {
                angular_jqxbargauge_1 = angular_jqxbargauge_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.flag = false;
                    this.settings = {
                        colorScheme: "scheme02",
                        width: 600,
                        height: 600,
                        max: 150,
                        values: [102, 115, 130, 137],
                        tooltip: {
                            visible: true, formatFunction: function (value) {
                                var realVal = parseInt(value);
                                return ('Year: 2016<br/>Price Index:' + realVal);
                            }
                        }
                    };
                }
                AppComponent.prototype.ngAfterViewChecked = function () {
                    if (this.flag === false) {
                        this.Initialize();
                    }
                    this.flag = true;
                };
                AppComponent.prototype.Initialize = function () {
                    this.myBarGauge.createWidget(this.settings);
                };
                __decorate([
                    core_1.ViewChild(angular_jqxbargauge_1.jqxBarGaugeComponent), 
                    __metadata('design:type', angular_jqxbargauge_1.jqxBarGaugeComponent)
                ], AppComponent.prototype, "myBarGauge", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<angularBarGauge></angularBarGauge>",
                        directives: [angular_jqxbargauge_1.jqxBarGaugeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map