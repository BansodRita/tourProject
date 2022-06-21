import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private api: ApiServiceService)  { }
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
