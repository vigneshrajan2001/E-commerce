import { Injectable } from '@angular/core';
import { Inputclass } from './inputclass';
@Injectable({
  providedIn: 'root'
})
export class InpserveService {

  constructor() { }

  getstudentdetail():Inputclass[]{
    return[{
     Name:"SPORT",
     Price:2500,
     ImageUrl:"assets/Mindset.jpg"
   },
 
   {
     Name:"CASIO",
     Price:10000,
     ImageUrl:"assets/Jane's Jam.jpg"
   },
  
   {
     Name:"ROLEX",
     Price:50000,
     ImageUrl:"assets/A Life.jpg"
   },
   {
    Name:"WINNER",
    Price:15000,
    ImageUrl:"assets/getting things done.jpg"
  }]
   }
 
}
