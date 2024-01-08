import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageForPersonalInfoComponent } from './image-for-personal-info/image-for-personal-info.component';
import { SerfiticatsComponent } from './serfiticats/serfiticats.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageForPersonalInfoComponent,
    SerfiticatsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
