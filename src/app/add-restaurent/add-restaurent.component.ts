import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert: boolean = false;
  addRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }


  craeteResto() {
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurent.reset({});
      console.log("Get Data From Service", result)
    })
  }
  closeAlert() {
    this.alert = false;
  }

}