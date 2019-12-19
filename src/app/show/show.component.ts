import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  list=[{"name":"tops", "country":"IND"},
        {"name":"topsRajkot", "country":"USA"},
        {"name":"topsNavsari", "country":"CND"}];

        getcolor(country){
          switch(country){
            case 'IND':
              return "red";

            case 'USA':
              return "green";

            case 'CND':
              return "blue";
          }
        }

  ngOnInit() {
  }

}
