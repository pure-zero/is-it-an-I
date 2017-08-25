import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import { CharCheckPipePipe } from './char-check-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharCheckPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
