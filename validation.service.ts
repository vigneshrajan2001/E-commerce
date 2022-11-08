import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  formValidate:FormGroup=new FormGroup({
    Username:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    NewPassword:new FormControl('',Validators.required),
    ConfirmPassword:new FormControl('',Validators.required,),
    PhoneNumber:new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  formValidate1:FormGroup=new FormGroup({
    Username:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
  });
  initializeForms()
  {
    this.formValidate.setValue({
      Username:'',
      Email:'',
      NewPassword:'',
      ConfirmPassword:'',
      PhoneNumber:''
      
    })
  }
  initializeForms1()
  {
    this.formValidate1.setValue({
      Username:'',
      Password:''
      
    })
  }
}

