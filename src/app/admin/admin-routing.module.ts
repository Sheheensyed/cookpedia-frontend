import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { DownloadComponent } from './download/download.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';

const routes: Routes = [
  {
    path:'',component:FrontPageComponent,title:"Admin Dashboard"
  },
  {
    path:'download-list',component:DownloadComponent,title:"Recipe Download list"
  },
  {
    path:"recipe-list",component:RecipeListComponent,title:"Recipe list"
  },
  {
    path:'user-list',component:UserListComponent,title:"user list"
  },
  {
    path:'request-list',component:FeedbackListComponent,title:"Client request list"
  },
  {
    path:'recipe/add',component:ManageRecipeComponent,title:"Add recipe page"
  },
  {
    path:'recipe/:id/edit',component:ManageRecipeComponent,title:"Edit recipe Page"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
