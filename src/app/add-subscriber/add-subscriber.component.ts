import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscriber } from '../Model/subscriber';
import { SubscribersService } from '../Shared/subscribers.service';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  subscreiber:subscriber=new subscriber();

  constructor(private subscriberservice:SubscribersService,private route:Router) { }

  ngOnInit(): void {
  }

  AddSubscriber(){
    this.subscreiber.image="../assets/img/Avatar_unisex.png"
    this.subscriberservice.AddSubscriber(this.subscreiber).subscribe(data=>this.route.navigate(['subscribers']));
  }
}
