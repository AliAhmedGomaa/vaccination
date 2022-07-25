import { VaccinationService } from './../../shared/services/vaccination.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-vaccination',
  templateUrl: './edit-vaccination.component.html',
  styleUrls: ['./edit-vaccination.component.scss']
})
export class EditVaccimationComponent implements OnInit {

  editVaccinationForm!: FormGroup;
  editVaccination = false;

  constructor(
    private fb: FormBuilder,
    private vaccinationService: VaccinationService
  ) { }

  ngOnInit(): void {
    this.initEditVaccinationForm()
  }

  initEditVaccinationForm() {
    this.editVaccinationForm = this.fb.group({
      vaccinationName: ['', [Validators.required]],
      vaccinationAgainst: ['', [Validators.required]],
      time: ['', [Validators.required]],
      doseNumber: ['', [Validators.required]],
      healthProfessional: ['', [Validators.required]],
      vaccinationReason: ['', [Validators.required]],
      lotNumber: ['', [Validators.required]],
      vaccinationPosition: ['', [Validators.required]],
      vaccinationMethod: ['', [Validators.required]],
      status: ['', [Validators.required]],
      vaccinatedBy: ['', [Validators.required]],
    })
  }

  submit() {
    this.vaccinationService.vaccination.next(this.editVaccinationForm.value);
    this.vaccinationService.canEditForm.next(false);
  }
}
