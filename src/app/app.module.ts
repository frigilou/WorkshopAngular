import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { ReactiveFormsModule} from '@angular/forms';
import { UpdateCoachComponent } from './update-coach/update-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SubscribersComponent,
    UpdateSubscriberComponent,
    AddSubscriberComponent,
    CoachesComponent,
    CoachComponent,
    AddCoachComponent,
    UpdateCoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
