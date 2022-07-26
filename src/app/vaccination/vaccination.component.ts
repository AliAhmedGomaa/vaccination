import { Component, OnInit } from '@angular/core';
import { Vaccination } from '../shared/interfaces/Vaccination.interface';

import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { VaccinationService } from '../shared/services/vaccination.service';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {

  constructor(private vaccinationService: VaccinationService) { }
  vaccination!: Vaccination;
  editVaccination = false;

  // date: dayjs.Dayjs = dayjs('2013-01-10'); // use angular date pipe instead

  ngOnInit(): void {
    this.vaccinationService.vaccination.subscribe((data: Vaccination) => {
      this.vaccination = data;
    });
  }

  setCanEdit() {
    this.vaccinationService.canEditForm.next(true);
  }
}
