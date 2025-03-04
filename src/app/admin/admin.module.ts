import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DahboardComponent } from './dahboard/dahboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DownloadComponent } from './download/download.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AsideComponent } from './aside/aside.component';
import { DemoComponent } from './demo/demo.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    DahboardComponent,
    RecipeListComponent,
    UserListComponent,
    DownloadComponent,
    ManageRecipeComponent,
    FeedbackListComponent,
    AsideComponent,
    DemoComponent,
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    HighchartsChartModule
  ]
})
export class AdminModule {

}
