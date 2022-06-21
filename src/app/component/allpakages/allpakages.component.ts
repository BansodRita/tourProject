import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-allpakages',
  templateUrl: './allpakages.component.html',
  styleUrls: ['./allpakages.component.css']
})
export class AllpakagesComponent implements OnInit {
title:any="hello"
  constructor(private api: ApiServiceService) { }
  packageList:any=[];
  ngOnInit(): void {
    this.listOfPackage();
  }
  listOfPackage() {
    this.api.listhotel().subscribe(res => {
      console.log(res);
      this.packageList = res
      console.log(this.packageList);
    })
  }

}
