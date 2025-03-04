import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {
  recipeId: string = ''
  recipe: any = {}
  allRelatedRecipe: any = []

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

  getRelatedRecipeDetails(cuisine: string) {
    this.api.similarRecipeApi(cuisine).subscribe((res: any) => {

      if (res.length > 1) {

        this.allRelatedRecipe = res.filter((item: any) => item.name != this.recipe.name)
        console.log(this.allRelatedRecipe);
      } else {
        this.allRelatedRecipe = []
      }


    })
  }

  downloadRecipe() {
    this.api.downloadRecipeApi(this.recipeId, this.recipe).subscribe((res: any) => {
      this.api.getChartDataApi()
      this.generatePdf()
    })
  }

  generatePdf() {
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.setTextColor('red');
    pdf.text(this.recipe.name, 10, 10);

    // Ensure image is in Base64 or valid URL
    const image = this.recipe.image;
    if (image) {
      try {
        pdf.addImage(image, 'JPEG', 10, 15, 50, 50); // Adjust format if needed (PNG, JPEG)
      } catch (error) {
        console.error('Error adding image:', error);
      }
    }

    pdf.setFontSize(12);
    pdf.setTextColor('black');
    let y = 70; // Adjust starting position after image

    pdf.text(`Cuisine: ${this.recipe.cuisine}`, 10, y);
    pdf.text(`Servings: ${this.recipe.servings}`, 10, y + 5);
    pdf.text(`Mode of Cooking: ${this.recipe.difficulty}`, 10, y + 10);
    pdf.text(`Total Preparation Time: ${this.recipe.prepTimeMinutes}`, 10, y + 15);
    pdf.text(`Total Cooking Time: ${this.recipe.cookTimeMinutes}`, 10, y + 20);
    pdf.text(`Total Calorie Per Servings: ${this.recipe.caloriesPerServing}`, 10, y + 25);

    let head = [[`Ingredients Needed`, `Cooking Instructions`]];
    let body = [[this.recipe.ingredients, this.recipe.instructions]];

    autoTable(pdf, { head, body, startY: y + 35 });
    pdf.output(`dataurlnewwindow`)
    pdf.save(`${this.recipe.name}.pdf`);
  }

  saveRecipe() {
    this.api.saveRecipeApi(this.recipeId, this.recipe).subscribe({
      next: (res: any) => {
        alert(`Recipe added successfully to your collection`)
      },
      error: (reason: any) => {
        alert(reason.error)
      }
    })
  }


}
