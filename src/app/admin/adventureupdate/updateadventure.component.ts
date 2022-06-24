import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-updatehonemoon',
  templateUrl: './updateadventure.component.html',
  styleUrls: ['./updateadventure.component.css']
})
export class UpdateadventureComponent implements OnInit {

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:ActivatedRoute ) { }
  public editorValue: string = '';
  public editorValue1: string = '';
  //adventureForm: FormGroup;
  categoryList: any = [];
  selectedfile: File;
  adventureList: any = [];

  adventureForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      adventureName: new FormControl(''),
      adventureDescription: new FormControl(''),
      Image: new FormControl(''),
      adventurePrice: new FormControl(''),
      adventureItinerary: new FormControl(''),
      adventureIncludes: new FormControl(''),

  })
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.api.getcurrentadventure(this.router.snapshot.params.id).subscribe((reasult)=>{
  this.adventureForm=new FormGroup({
    id: new FormControl(reasult['_id']),
      fK: new FormControl(reasult['fk']),
      adventureName: new FormControl(reasult['adventureName']),
      adventureDescription: new FormControl(reasult['adventureDescription']),
      Image: new FormControl(reasult['Image']),
      adventurePrice: new FormControl(reasult['adventurePrice']),
      adventureItinerary: new FormControl(reasult['adventureItinerary']),
      adventureIncludes: new FormControl(reasult['adventureIncludes']),
  })
  console.log(reasult);
})

    this.adventureForm = this.fb.group({
      id: new FormControl(''),
      fK: new FormControl(''),
      adventureName: new FormControl(''),
      adventureDescription: new FormControl(''),
      Image: new FormControl(''),
      adventurePrice: new FormControl(''),
      adventureItinerary: new FormControl(''),
      adventureIncludes: new FormControl(''),
    })
 
  }
  onchangefile(event) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.adventureForm.value);
    this.api.updateadventure(this.router.snapshot.params.id, this.adventureForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    fd.append('Image', this.selectedfile, this.selectedfile.name);
    fd.append('fK', this.adventureForm.value.fK);
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
  listadventure() {
    this.api.listadventure().subscribe(res => {
      console.log(res);
      this.adventureList = res
      console.log(this.adventureList);
    })
  }
  deleteadventure(id) {
    this.api.deleteadventure(id).subscribe((res) => {
      let result = res;
      alert(JSON.stringify(result));
      this.listadventure();
    })
  }

  
  clearForm() {
    this.adventureForm.reset();
  }
}
