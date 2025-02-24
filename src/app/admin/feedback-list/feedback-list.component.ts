import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent {
allFeedBack:any=[]

ngOnInit(){
  this.getAllFeedback()
}

constructor(private api:ApiService){}

getAllFeedback(){
  this.api.allFeedbackApi().subscribe((res:any)=>{
    this.allFeedBack=res
    console.log(res);
    
  })
}

feedBackStatus(id:string,status:string){
  this.api.updateFeedBackStatusApi(id,status).subscribe((res:any)=>{
    this.getAllFeedback()
  })
}


}
