import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  countries: any[] = [];
  displayedColumns: string[] = ['name', 'capital', 'subregion', 'population'];
  dataSource = new MatTableDataSource(this.countries);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (response: any) => {
        this.countries = response;
        this.dataSource.data = this.countries;
      });
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
