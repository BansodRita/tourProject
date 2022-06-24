import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-car',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdateCarComponent implements OnInit {
  constructor(private api: ApiServiceService, private router:ActivatedRoute, private fb: FormBuilder) { }
  public editorValue: string = '';
  public editorValue1: string = '';

  categoryList: any = [];
  selectedfile: File;
  carList: any = [];

  carForm= new FormGroup({
    id: new FormControl(''),
      fK: new FormControl(''),
      carName: new FormControl(''),
      carDescription: new FormControl(''),
      Image: new FormControl(''),
      carPrice: new FormControl(''),
      carItinerary: new FormControl(''),
      carIncludes: new FormControl(''),

  })
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.api.getcurrentcar(this.router.snapshot.params.id).subscribe((reasult)=>{
      console.log(reasult);
      this.carForm=new FormGroup({
        id: new FormControl(reasult['_id']),
          fK: new FormControl(reasult['fk']),
          carName: new FormControl(reasult['carName']),
          carDescription: new FormControl(reasult['carDescription']),
          Image: new FormControl(reasult['Image']),
          carPrice: new FormControl(reasult['carPrice']),
          carItinerary: new FormControl(reasult['carItinerary']),
          carIncludes: new FormControl(reasult['carIncludes']),
        })
    this.list();
  });

  }
  onchangefile(event:any) {
    console.log(event.target.files[0])
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  updateData(){
    console.log(this.carForm.value);
    this.api.updatecar(this.router.snapshot.params.id, this.carForm.value).subscribe(result=>{
      console.log(result);
    })
  }
  insertData() {
    const fd = new FormData();
    console.log(fd)
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
