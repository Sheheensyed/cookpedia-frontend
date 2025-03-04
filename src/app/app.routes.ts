import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SaveRecipeComponent } from './save-recipe/save-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PNFComponent } from './pnf/pnf.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: 'admin', canActivate: [authGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '', component: HomeComponent, title: 'Home page'
    },
    {
        path: 'about', component: AboutComponent, title: 'About page'
    },
    {
        path: 'contact', component: ContactComponent, title: 'Contact page'
    },
    {
        path: 'login', component: LoginComponent, title: "Login page"
    },
    {
        path: 'register', component: RegisterComponent, title: "Register page"
    },
    {
        path: 'profile', component: ProfileComponent, canActivate: [authGuard], title: "Profile"
    },
    {
        path: 'save-recipe', component: SaveRecipeComponent, canActivate: [authGuard], title: "Save recipe page"
    },
    {
        path: 'recipe/:id/view', component: ViewRecipeComponent, canActivate: [authGuard], title: "View recipe page"
    },
    {
        path: 'recipes', component: RecipeComponent, title: "Recipe page"
    },
    {
        path: '**', component: PNFComponent, title: "Page not found"
    }
];
