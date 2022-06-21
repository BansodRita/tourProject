import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-updatefamily',
  templateUrl: './updatefamily.component.html',
  styleUrls: ['./updatefamily.component.css']
})
export class UpdatefamilyComponent implements OnInit {

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:ActivatedRoute ) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  //familyForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  familyList: any = [];

  updatefamilyForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      familyName: new FormControl(''),
      familyDescription: new FormControl(''),
      Image: new FormControl(''),
      familyPrice: new FormControl(''),
      familyItinerary: new FormControl(''),
      familyIncludes: new FormControl(''),

  })
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.api.getcurrentfamily(this.router.snapshot.params.id).subscribe((reasult)=>{
  console.log(reasult);
  this.updatefamilyForm=new FormGroup({
    id: new FormControl(reasult['_id']),
      fK: new FormControl(reasult['fk']),
      familyName: new FormControl(reasult['familyName']),
      familyDescription: new FormControl(reasult['familyDescription']),
      Image: new FormControl(reasult['Image']),
      familyPrice: new FormControl(reasult['familyPrice']),
      familyItinerary: new FormControl(reasult['familyItinerary']),
      familyIncludes: new FormControl(reasult['familyIncludes']),
  })
  console.log(reasult);
})

    this.updatefamilyForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      familyName: new FormControl(''),
      familyDescription: new FormControl(''),
      Image: new FormControl(''),
      familyPrice: new FormControl(''),
      familyItinerary: new FormControl(''),
      familyIncludes: new FormControl(''),
    })
 
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.updatefamilyForm.value);
    this.api.updatefamily(this.router.snapshot.params.id, this.updatefamilyForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    fd.append('fK', this.updatefamilyForm.value.fK);
    fd.append('familyName', this.updatefamilyForm.value.familyName);
    fd.append('familyDescription', this.updatefamilyForm.value.familyDescription);
    fd.append('familyPrice', this.updatefamilyForm.value.familyPrice);
    fd.append('familyItinerary', this.updatefamilyForm.value.familyItinerary);
    fd.append('familyIncludes', this.updatefamilyForm.value.familyIncludes);
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

  
  clearForm() {
    this.updatefamilyForm.reset();
  }
}
