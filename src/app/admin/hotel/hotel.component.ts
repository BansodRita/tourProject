import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(private api: ApiServiceService, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  hotelForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  hotelList: any = [];
  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      hotelName: new FormControl(''),
      hotelDescription: new FormControl(''),
      Image: new FormControl(''),
      hotelPrice: new FormControl(''),
      hotelItinerary: new FormControl(''),
      hotelIncludes: new FormControl('')
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
    
    fd.append('hotelName', this.hotelForm.value.hotelName);
    fd.append('hotelDescription', this.hotelForm.value.hotelDescription);
    fd.append('hotelPrice', this.hotelForm.value.hotelPrice);
    fd.append('hotelItinerary', this.hotelForm.value.hotelItinerary);
    fd.append('hotelIncludes', this.hotelForm.value.hotelIncludes);
    this.api.addhotel(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listOfhotel() {
    this.api.listhotel().subscribe(res => {
      console.log(res);
      this.hotelList = res
      console.log(this.hotelList);
    })
  }
  deleteOfhotel(id) {
    this.api.deletehotel(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listOfhotel();
    })
  }
 
  
  clearForm() {
    this.hotelForm.reset();
  }
  list() {
    this.api.listCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
      console.log(this.categoryList);
    })
  }
}
