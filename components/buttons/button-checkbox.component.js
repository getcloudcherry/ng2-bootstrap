var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ButtonCheckbox = (function () {
    function ButtonCheckbox(cd) {
        this.cd = cd;
        this.state = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // hack !
        cd.valueAccessor = this;
    }
    // view -> model
    ButtonCheckbox.prototype.onClick = function () {
        this.toggle(!this.state);
        this.cd.viewToModelUpdate(this.value);
    };
    ButtonCheckbox.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckbox.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckbox.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckbox.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckbox.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value;
    };
    ButtonCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckbox.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ButtonCheckbox.prototype, "btnCheckboxTrue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ButtonCheckbox.prototype, "btnCheckboxFalse", void 0);
    __decorate([
        core_1.HostBinding('class.active'), 
        __metadata('design:type', Boolean)
    ], ButtonCheckbox.prototype, "state", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ButtonCheckbox.prototype, "onClick", null);
    ButtonCheckbox = __decorate([
        core_1.Directive({ selector: '[btnCheckbox][ngModel]' }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [common_1.NgModel])
    ], ButtonCheckbox);
    return ButtonCheckbox;
})();
exports.ButtonCheckbox = ButtonCheckbox;
//# sourceMappingURL=button-checkbox.component.js.map