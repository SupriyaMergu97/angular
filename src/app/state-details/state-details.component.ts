import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../statelist/state.service';
import { IState } from '../models/state';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  state: IState;
  constructor(private _activatedRoute: ActivatedRoute, private _stateService: StateService, private _router: Router) { }
  onButtonClick(): void {
    this._router.navigate(['/states']);
  }

  ngOnInit() {
    const city = this._activatedRoute.snapshot.params['city'];
    if (city) {
      this._stateService.getStateDetails(city).subscribe((response: any) => {
        this.state = response[0];
      });
    }
  }

}
