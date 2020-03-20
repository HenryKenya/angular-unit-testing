import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data: any[] = []

  constructor(private dataService: DataService) {

  }

  ngOnInit () {

  }
  

  showData() {
    this.dataService.fetchData().subscribe( res => {
      this.data = res
    })
  }

}
