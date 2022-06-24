import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-car',
  templateUrl: './carpackage.component.html',
  styleUrls: ['./carpackage.component.css']
})
export class CarPackageComponent implements OnInit {
title:any="hello"
  constructor(private api: ApiServiceService) { }
  carList:any=[];
  ngOnInit(): void {
    this.listOfcar();
  }
  listOfcar() {
    this.api.listcar().subscribe(res => {
      console.log(res);
      this.carList = res
      console.log(this.carList);
    })
  }

}
