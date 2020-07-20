import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParticlesModule } from 'angular-particle';
import { PrimaryinputComponent } from './primaryinput/primaryinput.component';

import { HistoryService } from './history.service';
import { MaterialsService} from './materials.service';
import { WastageService } from './wastage.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    HistoryService,
    MaterialsService,
    WastageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
