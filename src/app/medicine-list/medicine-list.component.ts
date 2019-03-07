import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['Name', 'Price', 'Quantity', 'ExpiryDate'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  medicines: any;
  subscribtion: Subscription;
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.subscribtion = this.db.list('/medicines').valueChanges().subscribe(medicines => {
        this.medicines =  medicines;
        this.dataSource = new MatTableDataSource<any>(this.medicines);
        this.dataSource.paginator = this.paginator;
        this.paginator._changePageSize(this.paginator.pageSize);
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
