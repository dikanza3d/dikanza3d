import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { ComponentsModule } from './shared/components/components.module';
import { LandingPageModule } from './features/landing-page/landing-page.module';
import { AboutComponent } from './features/landing-page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, SharedModule, ComponentsModule, FeaturesModule, LandingPageModule, AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
