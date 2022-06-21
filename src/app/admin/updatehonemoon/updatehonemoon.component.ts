import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-updatehonemoon',
  templateUrl: './updatehonemoon.component.html',
  styleUrls: ['./updatehonemoon.component.css']
})
export class UpdatehonemoonComponent implements OnInit {

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:ActivatedRoute ) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  //hotelForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  hotelList: any = [];

  honeymoonForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      honeymoonName: new FormControl(''),
      honeymoonDescription: new FormControl(''),
      Image: new FormControl(''),
      honeymoonPrice: new FormControl(''),
      honeymoonItinerary: new FormControl(''),
      honeymoonIncludes: new FormControl(''),

  })
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.api.getcurrent(this.router.snapshot.params.id).subscribe((reasult)=>{
  this.honeymoonForm=new FormGroup({
    id: new FormControl(reasult['_id']),
      fK: new FormControl(reasult['fk']),
      honeymoonName: new FormControl(reasult['honeymoonName']),
      honeymoonDescription: new FormControl(reasult['honeymoonDescription']),
      Image: new FormControl(reasult['Image']),
      honeymoonPrice: new FormControl(reasult['honeymoonPrice']),
      honeymoonItinerary: new FormControl(reasult['honeymoonItinerary']),
      honeymoonIncludes: new FormControl(reasult['honeymoonIncludes']),
  })
  console.log(reasult);
})

    this.honeymoonForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      honeymoonName: new FormControl(''),
      honeymoonDescription: new FormControl(''),
      Image: new FormControl(''),
      honeymoonPrice: new FormControl(''),
      honeymoonItinerary: new FormControl(''),
      honeymoonIncludes: new FormControl(''),
    })
 
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.honeymoonForm.value);
    this.api.updatehotel(this.router.snapshot.params.id, this.honeymoonForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    fd.append('fK', this.honeymoonForm.value.fK);
    fd.append('hotelName', this.honeymoonForm.value.hotelName);
    fd.append('hotelDescription', this.honeymoonForm.value.hotelDescription);
    fd.append('hotelPrice', this.honeymoonForm.value.hotelPrice);
    fd.append('hotelItinerary', this.honeymoonForm.value.hotelItinerary);
    fd.append('hotelIncludes', this.honeymoonForm.value.hotelIncludes);
    this.api.addhoneymoon(fd).subscribe((data) => {
      console.log(data);
    })
    this.clearForm();
  }
  listhoneymoon() {
    this.api.listhotel().subscribe(res => {
      console.log(res);
      this.hotelList = res
      console.log(this.hotelList);
    })
  }
  deletehoneymoon(id) {
    this.api.deletehotel(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listhoneymoon();
    })
  }

  
  clearForm() {
    this.honeymoonForm.reset();
  }
}
