import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscriber} from '../Model/subscriber';
import { SubscribersService } from '../Shared/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribers:subscriber[];

  constructor(private subscriberservice:SubscribersService,private route:Router) { }

  ngOnInit(): void {
    this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=data);
  }

  Delete_Subscriber(id:number)
  {
     this.subscriberservice.DeleteSubscriber(id).subscribe(data=>this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=data));
  }

}
