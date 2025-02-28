import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RecipeModel } from '../model/recipeModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrl: './manage-recipe.component.css'
})
export class ManageRecipeComponent {

  @Input() id !: string

  AddRecipe: any = []
  cuisineArray: any = []
  mealsTypeArray: any = []
  recipeDetails: RecipeModel = {}
  ingredients: any = []
  instructions: any = []
  mealType: any = []

  ngOnInit() {
    this.getAllRecipes()
  }

  constructor(private api: ApiService, private router: Router) { }

  getAllRecipes() {
    this.api.getAllRecipeApi().subscribe((res: any) => {

      if (this.id) {
        this.recipeDetails = res.find((item: any) => item._id == this.id)
        this.ingredients = this.recipeDetails.ingredients
        this.instructions = this.recipeDetails.instructions
        this.mealType = this.recipeDetails.mealType
      }

      // cuisine
      res.forEach((item: any) => {
        !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
      })
      console.warn(this.cuisineArray);

      // this.dummyRecipes = this.allRecipes

      const dummyMeals = res.map((item: any) => item.mealType)
      // console.log(dummyMeals.flat(Infinity));

      const newMeals = dummyMeals.flat(Infinity)
      newMeals.forEach((item: any) => {
        !this.mealsTypeArray.includes(item) && this.mealsTypeArray.push(item)
      })
      console.log(this.mealsTypeArray);
    })

  }

  addIngredients(ingredientsInput: any) {
    if (ingredientsInput.value) {
      this.ingredients.push(ingredientsInput.value)
      ingredientsInput.value = ''
      console.log(this.ingredients);
    }
  }

  removeIng(value: any) {
    this.ingredients = this.ingredients.filter((item: string) => item != value)
  }

  addInstruction(instructionsInput: any) {
    if (instructionsInput.value) {
      this.instructions.push(instructionsInput.value)
      instructionsInput.value = ''
      console.log(this.instructions);
    }
  }

  removeIns(value: any) {
    this.instructions = this.instructions.filter((item: string) => item != value)
  }

  mealTypeSelect(event: any) {
    if (event.target.checked) {
      !this.mealType.includes(event.target.name) && this.mealType.push(event.target.name)
    } else {
      this.mealType = this.mealType.filter((item: string) => item != event.target.name)
    }
  }

  removeMealType(meal: string) {
    this.mealType = this.mealType.filter((item: string) => item != meal)
  }


  addRecipe() {
    console.log(this.recipeDetails);
    // 1. add ingredients, intructions  and mealtype to recipeDetails
    this.recipeDetails.ingredients = this.ingredients
    this.recipeDetails.instructions = this.instructions
    this.recipeDetails.mealType = this.mealType
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, caloriesPerServing, image, cuisine, mealType } = this.recipeDetails

    // 2. check all field have values in recipe details

    if (name && ingredients!.length > 0 && instructions!.length > 0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && caloriesPerServing && image && cuisine && mealType!.length > 0) {
      // alert(`Proceed for api call`)

      this.api.addRecipeApi(this.recipeDetails).subscribe({
        next: (res: any) => {
          alert('Recipe added successfuly')
          this.recipeDetails = {}
          this.ingredients = []
          this.instructions = []
          this.mealType = []
          this.router.navigateByUrl('/admin/recipe-list')
        },
        error: (reason: any) => {
          alert(reason.error)

        }
      })

    } else {
      alert(`Fill the form completely`)
    }
  }

  updateRecipe() {
    console.log(this.recipeDetails);
    console.log(this.recipeDetails);
    // 1. add ingredients, intructions  and mealtype to recipeDetails
    this.recipeDetails.ingredients = this.ingredients
    this.recipeDetails.instructions = this.instructions
    this.recipeDetails.mealType = this.mealType
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, caloriesPerServing, image, cuisine, mealType } = this.recipeDetails

    // 2. check all field have values in recipe details

    if (name && ingredients!.length > 0 && instructions!.length > 0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && caloriesPerServing && image && cuisine && mealType!.length > 0) {
      // alert(`Proceed for api call`)

      this.api.editRecipeApi(this.id, this.recipeDetails).subscribe({
        next: (res: any) => {
          alert('Recipe edited successfuly')
          this.recipeDetails = {}
          this.ingredients = []
          this.instructions = []
          this.mealType = []
          this.router.navigateByUrl('/admin/recipe-list')
        }
      })

    } else {
      alert(`Fill the form completely`)
    }

  }

 




}
