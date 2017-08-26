import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import { CharCheckPipePipe } from './char-check-pipe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ICheckComponent } from './i-check/i-check.component';

const appRoutes: Routes = [
  {
    path: ':text',
    component: ICheckComponent,
  },
  {
    path: '',
    component: ICheckComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CharCheckPipePipe,
    ICheckComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
