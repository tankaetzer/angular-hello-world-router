import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthorsService } from "./authors.service";
import { AuthorsComponent } from "./authors/authors.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AppErrorHandler } from "./common/app-error-handler";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { CourseComponent } from "./course/course.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { HomeComponent } from "./home/home.component";
import { InputFormatDirective } from "./input-format.directive";
import { LikeComponent } from "./like/like.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PanelComponent } from "./panel/panel.component";
import { PostsComponent } from "./posts/posts.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { PostService } from "./services/post.service";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { SummaryPipe } from "./summary.pipe";
import { TitleCasePipe } from "./title-case.pipe";
import { ZippyComponent } from "./zippy/zippy.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "profile/:username", component: GithubProfileComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundComponent },
    ]),
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
