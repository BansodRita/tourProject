import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrls: ['./updatehotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:ActivatedRoute ) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  //hotelForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  hotelList: any = [];

  hotelForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      hotelName: new FormControl(''),
      hotelDescription: new FormControl(''),
      Image: new FormControl(''),
      hotelPrice: new FormControl(''),
      hotelItinerary: new FormControl(''),
      hotelIncludes: new FormControl(''),

  })
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.api.getcurrent(this.router.snapshot.params.id).subscribe((reasult)=>{
  this.hotelForm=new FormGroup({
    id: new FormControl(reasult['_id']),
      fK: new FormControl(reasult['fk']),
      hotelName: new FormControl(reasult['hotelName']),
      hotelDescription: new FormControl(reasult['hotelDescription']),
      Image: new FormControl(reasult['Image']),
      hotelPrice: new FormControl(reasult['hotelPrice']),
      hotelItinerary: new FormControl(reasult['hotelItinerary']),
      hotelIncludes: new FormControl(reasult['hotelIncludes']),
  })
  console.log(reasult);
})

    this.hotelForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      hotelName: new FormControl(''),
      hotelDescription: new FormControl(''),
      Image: new FormControl(''),
      hotelPrice: new FormControl(''),
      hotelItinerary: new FormControl(''),
      hotelIncludes: new FormControl(''),
    })
 
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.hotelForm.value);
    this.api.updatehotel(this.router.snapshot.params.id, this.hotelForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    fd.append('fK', this.hotelForm.value.fK);
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
}
