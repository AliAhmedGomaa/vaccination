import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vaccination } from '../interfaces/Vaccination.interface';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  vaccination = new BehaviorSubject<Vaccination>({
    vaccinationName: 'Fluvax (Influenza)',
    vaccinationAgainst: 'Measles',
    time: new Date('2013-01-10'),
    doseNumber: '5 mg',
    healthProfessional: 'name',
    vaccinationReason: 'Procedure to meet occupational requirement',
    lotNumber: 'AAJN11K',
    vaccinationPosition: 'left arm',
    vaccinationMethod: 'name',
    status: 'completed',
    vaccinatedBy: 'johnn smith',
  });

  canEditForm = new BehaviorSubject<boolean>(false);
  constructor() { }

}
