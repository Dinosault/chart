import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  roleForm = new FormGroup({
      name: new FormControl(''),
      attack: new FormControl(0),
      defense: new FormControl(0),
    });

  constructor() {}

  // 返回整個表單
  getForm(): FormGroup {
    return this.roleForm;
  }
  // 設置整個表單的值
  setFromValues(values: { [key: string]: any }): void{
    this.roleForm.patchValue(values);
  }
  // 重置整個表單
  resetForm(): void {
    this.roleForm.reset();
  }

}
