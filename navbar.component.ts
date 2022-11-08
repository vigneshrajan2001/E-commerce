import { Component, OnInit } from '@angular/core';
import { Inputclass } from '../inputclass';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InpserveService } from '../inpserve.service';
import { RegisterComponent } from '../register/register.component';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  studentsec:string=''
  studentModel:Inputclass[]=[]

  constructor(public dialog:MatDialog,
              private routea:ActivatedRoute,
              private route:Router,
              private inpvar:InpserveService) { }

  ngOnInit(): void {
    this.routea.params.subscribe(params=>{
      if(params['studentsec']){
        this.studentModel=this.inpvar.getstudentdetail().filter(studentModel=>studentModel.Name.toLowerCase().includes(params['studentsec'].toLowerCase()))
      }else{
        this.studentModel=this.inpvar.getstudentdetail()
      }
    })
  }
  searchById(){
    console.log('Searching....')
    this.route.navigateByUrl('/search/'+this.studentsec)
  }
  opendialog(){
    const configdia=new MatDialogConfig();
    configdia.width='80%';
    configdia.autoFocus=true;
    configdia.disableClose=true;
    this.dialog.open(RegisterComponent,configdia)
  }
  opendialog1(){
    const configdia=new MatDialogConfig();
    configdia.width='80%';
    configdia.autoFocus=true;
    configdia.disableClose=true;
    this.dialog.open(LoginComponent,configdia)
  }
}
