import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allRecipes: any = []
  feedback: any = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllRecipes()
    this.approved()
  }

  getAllRecipes() {
    this.api.getAllRecipeApi().subscribe((res: any) => {
      this.allRecipes = res.slice(0, 6)
      console.log(this.allRecipes);

    })
  }

  approved() {
    this.api.approvedFeedbackApi().subscribe((res: any) => {
      this.feedback = res
      console.log(res);

    })
  }

}
