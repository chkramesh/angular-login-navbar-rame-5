import { Component, OnInit, ViewChild, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { merge, Subject, Observable } from 'rxjs';
import { startWith, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

//import { countries } from '../countries-list';
import { countries } from '../../../server/countries-list';
//import { MemberModel } from '../member.model';
import { Member } from '../member.model';

@Component({
  selector: 'app-members-search',
  templateUrl: './members-search.component.html',
  styleUrls: ['./members-search.component.css']
})
export class MembersSearchComponent implements OnInit {

    @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
    searchText: string = '';

    // For the countries search dropdown.
    public countries = countries;
    public country: string;
    public countriesControl = new FormControl('');

    // For last name query
    public searchTerm$ = new Subject<string>();

    constructor() { }

    ngOnInit() {
    }

    getAllRecords(): void {
        console.log('MembersSearchComponent before getAllRecords');
        this.groupFilters.emit('test');
        console.log('MembersSearchComponent after getAllRecords');
        //Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
        ////this.groupFilters.emit(filters);

        //this.searchTextTesttEmitter.emit('TestTest');
        // this.searchTextTest.emit('TestTest');
        ////this.searchByKeywordTest.emit('TestTest');
    }

}
