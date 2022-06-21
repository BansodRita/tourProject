import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.css']
})
export class HoneymoonComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  honeymoonForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  honeymoonList: any = [];
  ngOnInit(): void {
    this.honeymoonForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      honeymoonName: new FormControl(''),
      honeymoonDescription: new FormControl(''),
      Image: new FormControl(''),
      honeymoonPrice: new FormControl(''),
      honeymoonItinerary: new FormControl(''),
      honeymoonIncludes: new FormControl('')
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
    
    fd.append('honeymoonName', this.honeymoonForm.value.honeymoonName);
    fd.append('honeymoonDescription', this.honeymoonForm.value.honeymoonDescription);
    fd.append('honeymoonPrice', this.honeymoonForm.value.honeymoonPrice);
    fd.append('honeymoonItinerary', this.honeymoonForm.value.honeymoonItinerary);
    fd.append('honeymoonIncludes', this.honeymoonForm.value.honeymoonIncludes);
    this.api.addhoneymoon(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOfhoneymoon() {
    this.api.listhoneymoon().subscribe(res => {
      console.log(res);
      this.honeymoonList = res
      console.log(this.honeymoonList);
    })
  }
  deleteOfhoneymoon(id) {
    this.api.deletehoneymoon(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOfhoneymoon();
    })
  }
 
  // rowselected(data) {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   this.honeymoonForm.patchValue({
  //     id: data._id,
  //     fk: data.fk,
  //     honeymoonName: data.honeymoonName,
  //     honeymoonDescription: data.honeymoonDescription,
  //     honeymoonPrice: data.honeymoonPrice,
  //     honeymoonItinerary: data.honeymoonItinerary,
  //     honeymoonIncludes: data.honeymoonIncludes,
  //   })
  // }
  
  clearForm() {
    this.honeymoonForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
