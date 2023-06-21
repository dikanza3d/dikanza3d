import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HomeComponent } from './landing-page/home/home.component';



@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule, ComponentsModule
  ]
})
export class FeaturesModule { }
