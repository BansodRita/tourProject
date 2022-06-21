import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  businessForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  businessList: any = [];
  ngOnInit(): void {
    this.businessForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      businessName: new FormControl(''),
      businessDescription: new FormControl(''),
      Image: new FormControl(''),
      businessPrice: new FormControl(''),
      businessItinerary: new FormControl(''),
      businessIncludes: new FormControl('')
    })
    this.list();
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    
    fd.append('businessName', this.businessForm.value.businessName);
    fd.append('businessDescription', this.businessForm.value.businessDescription);
    fd.append('businessPrice', this.businessForm.value.businessPrice);
    fd.append('businessItinerary', this.businessForm.value.businessItinerary);
    fd.append('businessIncludes', this.businessForm.value.businessIncludes);
    this.api.addbusiness(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOfbusiness() {
    this.api.listbusiness().subscribe(res => {
      console.log(res);
      this.businessList = res
      console.log(this.businessList);
    })
  }
  deleteOfbusiness(id) {
    this.api.deletebusiness(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOfbusiness();
    })
  }
 
  // rowselected(data) {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   this.businessForm.patchValue({
  //     id: data._id,
  //     fk: data.fk,
  //     businessName: data.businessName,
  //     businessDescription: data.businessDescription,
  //     businessPrice: data.businessPrice,
  //     businessItinerary: data.businessItinerary,
  //     businessIncludes: data.businessIncludes,
  //   })
  // }
  
  clearForm() {
    this.businessForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
