import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-mon-calculatrice',
  templateUrl: './mon-calculatrice.component.html',
  styleUrls: ['./mon-calculatrice.component.css']
})
export class MonCalculatriceComponent implements OnInit {
  inputStr: any;
  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text: new FormControl('')
    })
  }
  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent;
    if (this.inputStr.controls.text.value !== null) {
      this.inputStr.controls.text.setValue(
        this.inputStr.controls.text.value + buttonText);
    } else {
      this.inputStr.controls.text.setValue(buttonText);
    }
  }
  clearDisplay() {
    this.inputStr.controls.text.setValue('');
  }
  calculate() {
    let result = eval(this.inputStr.controls.text.value);
    this.inputStr.controls.text.setValue(result);
  }
  deleteLast() {
    let str = this.inputStr.controls.text.value;
    str = str.slice(0. - 1)
    this.inputStr.controls.text.setValue(str);
  }
}
