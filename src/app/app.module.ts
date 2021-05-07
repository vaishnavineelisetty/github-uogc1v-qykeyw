import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevicingService } from './sevicing.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DemoMaterialModule } from './material-module';
@NgModule({
  declarations: [AppComponent, routingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatExpansionModule,
    // MatButtonModule,
    // MatCardModule,
    DemoMaterialModule
  ],
  providers: [SevicingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
