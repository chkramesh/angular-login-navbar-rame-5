import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  countries = [{ id: 'USA', name: 'United States' }, { id: 'UK', name: 'United Kingdom' }, { id: 'FR', name: 'France' }];
  exampleForm: FormGroup;
  country: String;

  // searchText: string;
  searchTextTest: string;
  filters1: Object;

  parentMessage: string = "Parent Says Hello!!!!";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
        // create form with validators
        this.exampleForm = this.formBuilder.group({
            country: '',
            //street: '',
        });

        console.log('this.exampleForm ############## = ' + this.exampleForm);
        //console.log('this.exampleForm ############## = ' + this.exampleForm.get('state'));

    }

  countryChange(event) {
        // console.log('value = ' + event.source.value + ' selected = ' + event.source.selected);
        // console.log('countryChange exampleForm 1 = ' + this.exampleForm.get('country').value);
  }

}
