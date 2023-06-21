import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ContractComponent } from './contract/contract.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContractComponent,
    ContainerComponent,
    BannerComponent,
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContractComponent,
    ContainerComponent,
    BannerComponent,
  ]
})
export class ComponentsModule { }
