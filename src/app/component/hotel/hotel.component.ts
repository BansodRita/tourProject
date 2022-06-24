import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-allpakages',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
title:any="hello"
  constructor(private api: ApiServiceService) { }
  hotelList:any=[];
  ngOnInit(): void {
    this.listOfhotel();
  }
  listOfhotel() {
    this.api.listhotel().subscribe(res => {
      console.log(res);
      this.hotelList = res
      console.log(this.hotelList);
    })
  }

}
