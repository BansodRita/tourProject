import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  adventureForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  adventureList: any = [];
  ngOnInit(): void {
    this.adventureForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      adventureName: new FormControl(''),
      adventureDescription: new FormControl(''),
      Image: new FormControl(''),
      adventurePrice: new FormControl(''),
      adventureItinerary: new FormControl(''),
      adventureIncludes: new FormControl('')
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
    
    fd.append('adventureName', this.adventureForm.value.adventureName);
    fd.append('adventureDescription', this.adventureForm.value.adventureDescription);
    fd.append('adventurePrice', this.adventureForm.value.adventurePrice);
    fd.append('adventureItinerary', this.adventureForm.value.adventureItinerary);
    fd.append('adventureIncludes', this.adventureForm.value.adventureIncludes);
    this.api.addadventure(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOfadventure() {
    this.api.listadventure().subscribe(res => {
      console.log(res);
      this.adventureList = res
      console.log(this.adventureList);
    })
  }
  deleteOfadventure(id) {
    this.api.deleteadventure(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOfadventure();
    })
  }
 
  // rowselected(data) {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   this.adventureForm.patchValue({
  //     id: data._id,
  //     fk: data.fk,
  //     adventureName: data.adventureName,
  //     adventureDescription: data.adventureDescription,
  //     adventurePrice: data.adventurePrice,
  //     adventureItinerary: data.adventureItinerary,
  //     adventureIncludes: data.adventureIncludes,
  //   })
  // }
  
  clearForm() {
    this.adventureForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
