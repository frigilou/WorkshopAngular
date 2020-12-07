import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { coach } from '../Model/coach';
import { CoachesService } from '../Shared/coaches.service';

@Component({
  selector: 'app-update-coach',
  templateUrl: './update-coach.component.html',
  styleUrls: ['./update-coach.component.css']
})
export class UpdateCoachComponent implements OnInit {

  coachdata  : FormGroup;
  entraineur: coach=new coach();

  constructor(private router:Router,private activatedroute:ActivatedRoute,private coachservice:CoachesService) { }

  ngOnInit(): void {
    
      this.activatedroute.paramMap.subscribe(result=> this.coachservice.GetCoachById(Number(result.get('id'))).subscribe(data=> this.entraineur=data));  
    
      this.coachdata = new FormGroup({
      firstname: new FormControl(this.entraineur.firstname,[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl(this.entraineur.lastname,[Validators.required,Validators.minLength(3)]),
      date_of_birth: new FormControl(this.entraineur.date_of_birth,[Validators.required,Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}')]),
      email: new FormControl(this.entraineur.email,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      phone: new FormControl(this.entraineur.phone,[Validators.required,Validators.pattern('[0-9]{8}')]),
      Speciality: new FormControl(this.entraineur.specialty,[Validators.required,Validators.minLength(3)])
    });
  }

  UpdateCoach()
  {
      this.coachservice.UpdateCoach(this.entraineur,this.entraineur.id).subscribe(data=> this.router.navigate(['coaches']));
  }

}
