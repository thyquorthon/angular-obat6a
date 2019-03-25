import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: 'autocomplete-overview-example.html',
  styleUrls: ['autocomplete-overview-example.css']
})
export class AutocompleteOverviewExample {
  selectedOption;
  users = [
    {
      displayName: 'abc'
    },
    {
      displayName: 'def'
    }
  ]
  resetValue() {
    this.selectedOption = '';
  }
  setValue() {
    this.selectedOption = 'abc';
  }
  getValue() {
    console.log(this.selectedOption);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */