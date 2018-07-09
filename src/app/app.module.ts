import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';

// ngx-bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// services
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

// guards
import { AuthGuard } from './guards/auth.guard';

// components
import { AppComponent } from './app.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AuthDialogContentComponent } from './auth-dialog-content/auth-dialog-content.component';
import { BarComponent } from './bar/bar.component'
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bar',
    component: BarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes/:id',
    component: RecipeShowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/add',
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/add/:id',
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    RecipeListComponent,
    RecipeShowComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    AuthDialogContentComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BarComponent,
  ],
  entryComponents: [AuthDialogContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ApiService, Angular2TokenService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
