import { Component, ViewChild, Injectable, Input, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';

import { merge, BehaviorSubject, Subject, Observable } from 'rxjs';
import { startWith, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

import { MyDataService } from "../../service/my-data.service";
import { Member } from '../../members/member.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
// export class MembersListComponent implements OnInit {
export class MembersListComponent implements OnInit, OnChanges {

    @Input() groupFilters: Object;
    //@Input() searchByKeyword: string;
    //@Input() searchByKeywordTest: string;
    // groupFilters
    @Input() searchByKeywordTest: string;

    private dsData: any;

    // dataSource: MatTableDataSource<MemberModel>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public dataLength: number;
    public displayedColumns = [
        'select',
        'firstName',
        'lastName',
        'userName',
        'country',
        'options'
    ];

    public dataSource = new MatTableDataSource;

    constructor(private myDataService: MyDataService) { }

    ngOnInit() {
        console.log('MembersListComponent ngOnInit() 11');
          // this.getMembers();      
    }

    ngOnChanges(): void {
        console.log('MembersListComponent ngOnChanges() 2 this.groupFilters = ' + this.groupFilters);
        this.getAllRecords();
        // if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
    }

    memberSearchEventHandler(grpriceOptions) {
        console.log('MembersListComponent memberSearchEventHandler() 33');

    }

      // ----------------- GET ALL ------------------

      //  This works fine when multiple queries used.
    public getAllRecords(): any {
        console.log('MembersListComponent getAllRecords searchByKeywordTest = ' + this.searchByKeywordTest);
           //this.httpService.getAllRecords(this.membersUrl).subscribe(data => {
           this.myDataService.getMembers().subscribe(data => {
                this.dataLength = data.length;
                this.dataSource.data = data;
            });
      }

      getMembers(): Observable<Member> {
          console.log('MembersListComponent test call getMembers');
          console.log('MembersListComponent test call getMembers searchByKeywordTest = ' + this.searchByKeywordTest);
          const memberObservable = this.myDataService.getMembers().pipe(
                //catchError(transformError)
          )

          memberObservable.subscribe(
                //user => this.currentUser.next(user),
                err => observableThrowError(err)
          )

          // console.dir(memberObservable);
          return memberObservable;
      }

   

}
