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
  firstname:string;

  constructor(private subscriberservice:SubscribersService,private route:Router) { }


  ngOnInit(): void {
    this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=data);
  }

  Delete_Subscriber(id:number)
  {
     this.subscriberservice.DeleteSubscriber(id).subscribe(data=>this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=data));
  }

  searchByName(data: subscriber[]): subscriber[] {
    let x: Array <subscriber>= new Array();

    for (let i of data) {
      if((this.firstname === i.firstname) || (i.firstname.indexOf(this.firstname)!=-1))
      {
        x.push(i);
      }
    }
    return x;
  }

  Search()
  {
    if(this.firstname =="")
    {
      this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=data);
    }
    else if(this.firstname != "")
    {
      this.subscriberservice.GetAllSubscribers().subscribe(data=>this.subscribers=this.searchByName(data));
    }
  }

}
