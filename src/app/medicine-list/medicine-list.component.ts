import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Price', 'Quantity', 'ExpiryDate'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  medicines: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
      this.db.list('/medicines').valueChanges().subscribe(medicines => {
        this.medicines =  medicines;
        this.dataSource = new MatTableDataSource<any>(this.medicines);
        this.dataSource.paginator = this.paginator;
        this.paginator._changePageSize(this.paginator.pageSize);
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
