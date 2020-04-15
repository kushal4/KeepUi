import { Component, forwardRef, ContentChild, ElementRef, AfterViewInit, AfterContentInit, OnInit, ContentChildren, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'div-input',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DivSelectButtonsComponent),
        multi: true
    }
  ],
  template: `<div #ref (input)="fetch()"><ng-content></ng-content></div>`,
})
export class DivSelectButtonsComponent implements ControlValueAccessor {
  @ViewChild('ref', { static: true }) content: ElementRef;
  onChange: any = () => {};
  onTouched: any = () => {};

  _value= ""

  fetch(){
    this.value=this.content.nativeElement.innerText;
    this.writeValue(this.value);
    console.log(this.value);
  }
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: any): void {
    //this.onTouch(this.val);
   // console.log(obj);
   this.value=value;
   // throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
   //this.onTouch=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   // throw new Error("Method not implemented.");
  }
    // implementation ControlValueAccessor interface
}
