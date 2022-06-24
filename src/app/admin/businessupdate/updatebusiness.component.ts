import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-updatehonemoon',
  templateUrl: './updatebusiness.component.html',
  styleUrls: ['./updatebusiness.component.css']
})
export class UpdatebusinessComponent implements OnInit {

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:ActivatedRoute ) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  //businessForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  businessList: any = [];

  businessForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      businessName: new FormControl(''),
      businessDescription: new FormControl(''),
      Image: new FormControl(''),
      businessPrice: new FormControl(''),
      businessItinerary: new FormControl(''),
      businessIncludes: new FormControl(''),

  })
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.api.getcurrentbusiness(this.router.snapshot.params.id).subscribe((reasult)=>{
  this.businessForm=new FormGroup({
    id: new FormControl(reasult['_id']),
      fK: new FormControl(reasult['fk']),
      businessName: new FormControl(reasult['businessName']),
      businessDescription: new FormControl(reasult['businessDescription']),
      Image: new FormControl(reasult['Image']),
      businessPrice: new FormControl(reasult['businessPrice']),
      businessItinerary: new FormControl(reasult['businessItinerary']),
      businessIncludes: new FormControl(reasult['businessIncludes']),
  })
  console.log(reasult);
})

    this.businessForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      businessName: new FormControl(''),
      businessDescription: new FormControl(''),
      Image: new FormControl(''),
      businessPrice: new FormControl(''),
      businessItinerary: new FormControl(''),
      businessIncludes: new FormControl(''),
    })
 
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.businessForm.value);
    this.api.updatebusiness(this.router.snapshot.params.id, this.businessForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    fd.append('fK', this.businessForm.value.fK);
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
  listbusiness() {
    this.api.listbusiness().subscribe(res => {
      console.log(res);
      this.businessList = res
      console.log(this.businessList);
    })
  }
  deletebusiness(id) {
    this.api.deletebusiness(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listbusiness();
    })
  }

  
  clearForm() {
    this.businessForm.reset();
  }
}
