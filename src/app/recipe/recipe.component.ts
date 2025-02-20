import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiService } from '../services/api.service';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SearchPipe, FormsModule, NgxPaginationModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  allRecipes: any = []
  cuisineArray: any = []
  mealsTypeArray: any = []
  dummyRecipes: any = []
  searchKey: string = ""
  p: number = 1

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipeApi().subscribe((res: any) => {
      this.allRecipes = res
      console.log(this.allRecipes);

      // cuisine
      this.allRecipes.forEach((item: any) => {
        !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
      })
      console.warn(this.cuisineArray);
      this.dummyRecipes = this.allRecipes

      const dummyMeals = this.allRecipes.map((item: any) => item.mealType)
      console.log(dummyMeals.flat(Infinity));

      const newMeals = dummyMeals.flat(Infinity)
      newMeals.forEach((item: any) => {
        !this.mealsTypeArray.includes(item) && this.mealsTypeArray.push(item)
      })
      console.log(this.mealsTypeArray);
    })

  }

  filterRecipes(key: string, value: string) {
    this.allRecipes = this.dummyRecipes.filter((item: any) => item[key].includes(value))
  }

  viewRecipe(recipeId: string) {
    if (sessionStorage.getItem('token')) {
      this.router.navigateByUrl(`/recipe/${recipeId}/view`)
    } else {
      alert(`Hey : Please login`)
    }
  }
}
