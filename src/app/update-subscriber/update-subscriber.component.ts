import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { subscriber } from '../Model/subscriber';
import { SubscribersService } from '../Shared/subscribers.service';

@Component({
  selector: 'app-update-subscriber',
  templateUrl: './update-subscriber.component.html',
  styleUrls: ['./update-subscriber.component.css']
})
export class UpdateSubscriberComponent implements OnInit {

  subscreiber:subscriber;

  constructor(private activatedroute:ActivatedRoute,private subscriberservice:SubscribersService,private route:Router) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(result=> this.subscriberservice.GetSubscriberById(Number(result.get('id'))).subscribe(data=>this.subscreiber=data));
  }

  UpdateSubscriber()
  {
     this.subscriberservice.UpdateSubscriber(this.subscreiber,this.subscreiber.id).subscribe(data=>this.route.navigate(['subscribers']));
  }

}
