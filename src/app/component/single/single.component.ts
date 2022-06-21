import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private route:ActivatedRoute, private api: ApiServiceService) { }
packageInfo:any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.api.getcurrent(this.route.snapshot.params.id).subscribe(data=>{
      this.packageInfo=data
      console.log(this.packageInfo);
    })
  }

}
