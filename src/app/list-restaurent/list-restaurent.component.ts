import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css']
})
export class ListRestaurantComponent implements OnInit {

  public collection: any = [];
  alert: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection)
    });
  }
  deleteResto(resto: any) {
    this.collection.splice(resto.id, -1)
    this.commonService.deleteResto(resto).subscribe((result) => {
      console.log("Data is Deleted Successfull !", result)
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }

}