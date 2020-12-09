import { Component, OnInit } from '@angular/core';
import {BusinessService }  from '../../services/business.service'
import { Business }  from '../../classes/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
businesslist:Business[];
  constructor(private _businessService: BusinessService) { }

  ngOnInit(): void {
    this._businessService.getbusiness()
    .subscribe
    {
      data => {
        this.businesslist = data
      }
    }
  }


}
