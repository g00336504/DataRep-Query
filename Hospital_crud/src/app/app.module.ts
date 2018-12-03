import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { InfoComponent } from './info/info.component';
/*-----I imported the info component here which was generated when i ran the command from the terminal----- */

const appRoutes: Routes = [
  {
    path: 'list',
    component: PostDetailsComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];
/*-----This is where the routing is implemented----- */
/*-----I created another page called info and made it the first page of the website----- */
/*-----All these pages are links and can be accesed from any page----- */

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    InfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
