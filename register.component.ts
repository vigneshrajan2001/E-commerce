import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:ValidationService,
    public notificationService:NotificationService) { }

  ngOnInit(): void {
  }
  ClearValue()
  {
    this.service.formValidate.reset();
    this.service.initializeForms();
  }
  submitData(){
    this.notificationService.successfullyCreated("Registeration Done Successfully");
  }
  
}
