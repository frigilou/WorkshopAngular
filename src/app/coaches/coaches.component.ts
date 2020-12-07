import {
  Component,
  OnInit
} from '@angular/core';
import {
  coach
} from '../Model/coach';
import {
  CoachesService
} from '../Shared/coaches.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  coaches: coach[];
  lastname: string;
  firstname: string;
  specialty: string;

  constructor(private coachesservice: CoachesService) {}

  ngOnInit(): void {
    this.coachesservice.GetAllCoaches().subscribe(data => this.coaches = data);
  }

  addAbcense(id: number) {
    for (let i of this.coaches) {
      if (i.id === id) {
        this.coachesservice.AddAbcense(i).subscribe(data => this.coachesservice.GetAllCoaches().subscribe(data => this.coaches = data));
      }
    }
  }

  DeleteCoach(Coach:coach)
  {
    this.coachesservice.DeleteCoach(Coach).subscribe(data => this.coachesservice.GetAllCoaches().subscribe(data => this.coaches = data));
  }

  search(data: coach[]): coach[] {
    let x: Array <coach>= new Array();

    for (let i of data) {
      if ((i.firstname === this.firstname || this.firstname == null || this.firstname == "")
         && (i.lastname === this.lastname || this.lastname == null || this.lastname == "") 
         && (i.specialty === this.specialty || this.specialty == null || this.specialty=="")) {
        x.push(i);
      }
    }
    return x;
  }

  click_search() {
    this.coachesservice.GetAllCoaches().subscribe(data => this.coaches = this.search(data));
  }
}
