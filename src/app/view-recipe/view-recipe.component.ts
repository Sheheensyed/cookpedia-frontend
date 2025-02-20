import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {
  recipeId: string = ''
  recipe: any = {}
  allRelatedRecipe:any=[]

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit() {
    this.route.params.subscribe((resizeBy: any) => {
      this.recipeId = resizeBy.id
      console.log(this.recipeId);
      this.getRecipeDetails(this.recipeId)

    })
  }

  getRecipeDetails(recipeId: any) {
    this.api.singleRecipeApi(recipeId).subscribe((res: any) => {
      this.recipe = res
      console.log(this.recipe);

      this.getRelatedRecipeDetails(res.cuisine)
    })
  }

  getRelatedRecipeDetails(cuisine:string){
    this.api.similarRecipeApi(cuisine).subscribe((res:any)=>{

      if(res.length>1){

        this.allRelatedRecipe=res.filter((item:any)=>item.name!=this.recipe.name)
        console.log(this.allRelatedRecipe);
      }else{
        this.allRelatedRecipe=[]
      }
      

    })
  }

}
