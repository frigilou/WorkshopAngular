import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { CoachesComponent } from './coaches/coaches.component';
import { HomeComponent } from './home/home.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"gestion",component:UserComponent},
  {path:"subscribers",component:SubscribersComponent},
  {path:"UpdateSubscriber/:id",component:UpdateSubscriberComponent},
  {path:"AddSubscriber",component:AddSubscriberComponent},
  {path:"coaches",component:CoachesComponent},
  {path:"AddCoach",component:AddCoachComponent},
  {path:"UpdateCoach/:id",component:UpdateCoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
