import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  familyForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  familyList: any = [];
  ngOnInit(): void {
    this.familyForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      familyName: new FormControl(''),
      familyDescription: new FormControl(''),
      Image: new FormControl(''),
      familyPrice: new FormControl(''),
      familyItinerary: new FormControl(''),
      familyIncludes: new FormControl('')
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
    
    fd.append('familyName', this.familyForm.value.familyName);
    fd.append('familyDescription', this.familyForm.value.familyDescription);
    fd.append('familyPrice', this.familyForm.value.familyPrice);
    fd.append('familyItinerary', this.familyForm.value.familyItinerary);
    fd.append('familyIncludes', this.familyForm.value.familyIncludes);
    this.api.addfamily(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOffamily() {
    this.api.listfamily().subscribe(res => {
      console.log(res);
      this.familyList = res
      console.log(this.familyList);
    })
  }
  deleteOffamily(id) {
    this.api.deletefamily(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOffamily();
    })
  }
 
  // rowselected(data) {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   this.familyForm.patchValue({
  //     id: data._id,
  //     fk: data.fk,
  //     familyName: data.familyName,
  //     familyDescription: data.familyDescription,
  //     familyPrice: data.familyPrice,
  //     familyItinerary: data.familyItinerary,
  //     familyIncludes: data.familyIncludes,
  //   })
  // }
  
  clearForm() {
    this.familyForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
