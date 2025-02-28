import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  allRecipe:any=[]
  
  searchRecipe:string=''

  ngOnInit(){
    this.getAllRecipes()
  }

  constructor(private api:ApiService){}

  getAllRecipes(){
    this.api.getAllRecipeApi().subscribe((res:any)=>{
      this.allRecipe=res
      console.log(res);
      
    })
  }

  deleteRecipe(id: string) {
     this.api.deleteRecipeApi(id).subscribe((res:any)=>{
      this.getAllRecipes()
    })
  }

}
