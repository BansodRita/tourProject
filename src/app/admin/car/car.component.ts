import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  carForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  carList: any = [];
  ngOnInit(): void {
    this.carForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      carName: new FormControl(''),
      carDescription: new FormControl(''),
      Image: new FormControl(''),
      carPrice: new FormControl(''),
      carItinerary: new FormControl(''),
      carIncludes: new FormControl('')
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
    
    fd.append('carName', this.carForm.value.carName);
    fd.append('carDescription', this.carForm.value.carDescription);
    fd.append('carPrice', this.carForm.value.carPrice);
    fd.append('carItinerary', this.carForm.value.carItinerary);
    fd.append('carIncludes', this.carForm.value.carIncludes);
    console.log(fd);
    this.api.addcar(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOfcar() {
    this.api.listcar().subscribe(res => {
      console.log(res);
      this.carList = res
      console.log(this.carList);
    })
  }
  deleteOfcar(id) {
    this.api.deletecar(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOfcar();
    })
  }
 
  // rowselected(data) {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   this.carForm.patchValue({
  //     id: data._id,
  //     fk: data.fk,
  //     carName: data.carName,
  //     carDescription: data.carDescription,
  //     carPrice: data.carPrice,
  //     carItinerary: data.carItinerary,
  //     carIncludes: data.carIncludes,
  //   })
  // }
  
  clearForm() {
    this.carForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
