import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { coach } from '../Model/coach';
import { CoachesService } from '../Shared/coaches.service';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent implements OnInit {

  coachdata  : FormGroup;
  entraineur : coach = new coach();

  constructor(private coachesservice:CoachesService,private router:Router) { }

  ngOnInit(): void {
      this.coachdata = new FormGroup({
      firstname: new FormControl(this.entraineur.firstname,[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl(this.entraineur.lastname,[Validators.required,Validators.minLength(3)]),
      date_of_birth: new FormControl(this.entraineur.date_of_birth,[Validators.required,Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}')]),
      email: new FormControl(this.entraineur.email,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      phone: new FormControl(this.entraineur.phone,[Validators.required,Validators.pattern('[0-9]{8}')]),
      Speciality: new FormControl(this.entraineur.specialty,[Validators.required,Validators.minLength(3)])
    });
  }

  AddCoach()
  {
      this.entraineur.Nombreabscense=0;
      this.entraineur.image="../assets/img/Avatar_unisex.png"
      this.coachesservice.AddCoach(this.entraineur).subscribe(data=>this.router.navigate(['coaches']));
      this.entraineur= new coach();
  }

}
