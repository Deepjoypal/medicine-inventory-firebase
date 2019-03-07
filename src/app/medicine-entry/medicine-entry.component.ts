import { Medicine } from './../interfaces/medicine';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-medicine-entry',
  templateUrl: './medicine-entry.component.html',
  styleUrls: ['./medicine-entry.component.css']
})
export class MedicineEntryComponent implements OnInit {
  medicine$: AngularFireList<Medicine>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.medicine$ = this.db.list('/medicines');
  }

  add(formValues: Medicine) {
    this.medicine$.push(formValues);
  }
}
