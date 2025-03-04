import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  selected = new Date()
  isBarOpen: boolean = true
  columnWidth: string = "col-lg-10"
  userCount: number = 0
  recipeCount: number = 0
  downloadCount: number = 0
  requestCount: number = 0
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions = {}
 

  constructor(private api: ApiService, private router: Router) {
    if(localStorage.getItem('chart')){
      let chartData = JSON.parse(localStorage.getItem('chart') || "")
      this.chartOptions = {
        chart: {
          type: 'bar'
        },
        title: {
          text: "Analysis of Download Based of Cuisine",
          align: "left"
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          title: {
            text: "Total Download recipe count"
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
          name:"Cuisine",
          colorByPoint:true,
          type:"bar",
          data:chartData
        }]
      }
    }
  }

  

  ngOnInit() {
    this.getUserCount()
    this.getDownloadCount()
  }

  menuButton() {
    this.isBarOpen = !this.isBarOpen
    this.isBarOpen ? this.columnWidth = "col-lg-10" : this.columnWidth = 'col'
  }

  getUserCount() {
    this.api.allUserApi().subscribe((res: any) => {
      this.userCount = res.length
    })

    this.api.getAllRecipeApi().subscribe((res: any) => {
      this.recipeCount = res.length
    })

    // this.api.allDownloadListApi().subscribe((res: any) => {
    //   this.downloadCount = res.length.map((item:any)=>item.count).reduce((a:any,b:any)=>a+b)
    //   console.log(res);  
    // })

    this.api.allFeedbackApi().subscribe((res: any) => {
      this.requestCount = res.filter((item: any) => item.status == 'Pending').length

    })
  }

  getDownloadCount() {
    this.api.allDownloadListApi().subscribe((res: any) => {
      this.downloadCount = res.map((item: any) => item.count).reduce((a: any, b: any) => a + b)
      console.log(res);
    })
  }


  logout() {
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigateByUrl('/')

  }

  
}
