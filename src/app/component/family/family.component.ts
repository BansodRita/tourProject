import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-allpakages',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class familyComponent implements OnInit {
title:any="hello"
  constructor(private api: ApiServiceService) { }
  familyList:any=[];
  ngOnInit(): void {
    this.listOffamily();
  }
  listOffamily() {
    this.api.listfamily().subscribe(res => {
      console.log(res);
      this.familyList = res
      console.log(this.familyList);
    })
  }

}
