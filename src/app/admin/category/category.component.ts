import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private api:ApiServiceService, private fb:FormBuilder) { }
  addform:FormGroup;
  categoryList:any=[];

  ngOnInit(): void {
    this.addform=this.fb.group({
      id:new FormControl(''),
      name:new FormControl('')
    })
  }
add(){
this.api.addCategory(this.addform.value).subscribe(result=>{
  console.log(result);
})
  }
  list(){
    this.api.listCategory().subscribe(res=>{
    
      this.categoryList=res
      console.log(this.categoryList);
    })
  }
}
