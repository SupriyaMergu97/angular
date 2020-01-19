import { Component, OnInit } from '@angular/core';
import { IState } from '../models/state';
import { StateService } from './state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css'],
  providers: [StateService]
})
export class StatelistComponent implements OnInit {
  states: IState[];
  constructor(private _stateService: StateService, private _activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this._stateService.getStates().subscribe((response: any) => {
      this.states = response;
    });
  }
  getTotalStatesCount(): number {
    return this.states.length;
  }

}
