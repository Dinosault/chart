import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  // 綁定在表單上
  formGroup: FormGroup | undefined;

  //  取得 FormArray
  get formArray(): FormArray {
    return this.formGroup?.get('insuredList')! as FormArray;
  }

  // 綁定在送出按鈕上，判斷表單是不是無效  
  get isFormInvalid(): boolean {
    return this.formArray.controls.length === 0 || this.formGroup!.invalid;
  }

  // 透過 DI 取得 FromBuilder 物件，建立表單
  constructor(private formBuilder: FormBuilder) {}

  // 當 Component 初始化的時候初始化表單
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      insuredList: this.formBuilder.array([])
    });
  }

  // 新增被保人
  addInsured(): void {
    const formGroup = this.createInsuredFormGroup();
    this.formArray.push(formGroup);
  }

  // 刪除被保人
  deleteInsured(index: number): void {
    this.formArray.controls.splice(index, 1);
    this.formArray.updateValueAndValidity();
  }

  // 送出表單
  submit(): void {
    // do login...
  }

  // 透過欄位的 Errors 來取得對應的錯誤訊息
  getErrorMessage(key: string, index: number): string {
    const formGroup = this.formArray.controls[index];
    const formControl = formGroup.get(key);
    let errorMessage: string;
    if (!formControl || !formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors['required']) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors['minlength']) {
      errorMessage = '姓名至少需兩個字以上';
    } else if (formControl.errors['maxlength']) {
      errorMessage = '姓名至多只能輸入十個字';
    }
    return errorMessage!;
  }

  // 建立被保人的表單
  private createInsuredFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });
  }
}
