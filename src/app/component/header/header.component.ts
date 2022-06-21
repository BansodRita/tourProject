import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiServiceService) { }
  categoryList:any=[];
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.api.listCategory().subscribe(res=>{
    
      this.categoryList=res
      console.log(this.categoryList);
    })
  }
}
