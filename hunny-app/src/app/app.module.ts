import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BiosComponent } from './components/bios/bios.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BiosComponent,
    ContactComponent,
    HomeComponent,
    SocialComponent,
    StyleGuideComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'header', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'bios', component: BiosComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'social', component: SocialComponent },
      { path: 'style-guide', component: StyleGuideComponent },
      { path: 'tutorials', component: TutorialsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
