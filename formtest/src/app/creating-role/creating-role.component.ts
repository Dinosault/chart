import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-creating-role',
  templateUrl: './creating-role.component.html',
  styleUrls: ['./creating-role.component.css'],
})
export class CreatingRoleComponent implements OnInit {

  roleAttributeForm= new FormGroup({
    name: new FormControl('', [Validators.required]),
    strengthControl: new FormControl(0, [Validators.required]),
    dexterityControl: new FormControl(0, [Validators.required]),
    constitutionControl: new FormControl(0, [Validators.required]),
    intelligenceControl: new FormControl(0, [Validators.required]),
    wisdomControl: new FormControl(0, [Validators.required]),
    charismaControl: new FormControl(0, [Validators.required]),
  })

  constructor(){}
  ngOnInit(): void {}

  updateRoleAttribute(): void {
    // 在這裡處理表單提交的邏輯
    console.log(this.roleAttributeForm.value);
  }
}
