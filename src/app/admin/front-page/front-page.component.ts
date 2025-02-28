import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  isBarOpen: boolean = true
  columnWidth: string = "col-lg-10"
  userCount: number = 0
  recipeCount: number = 0
  downloadCount: number = 0
  requestCount: number = 0

  constructor(private api: ApiService, private router: Router) { }

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

    // this.api.getDownloadListApi().subscribe((res: any) => {
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

  // getDownloadCount() {
  //   this.api.allDownloadListApi().subscribe((res: any) => {
  //     this.downloadCount = res.map((item: any) => item.count).reduce((a: any, b: any) => a + b)
  //         console.log(res);
  //     console.log(this.downloadCount);
  //   })
  // }

  logout() {
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigateByUrl('/')

  }
}
