import { VaccinationService } from './shared/services/vaccination.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  canEdit  = false;

  constructor(private vaccinationService:VaccinationService){}

  ngOnInit() {
    this.vaccinationService.canEditForm.subscribe((canEdit: boolean) => {
      this.canEdit = canEdit;
    })
  }
}
