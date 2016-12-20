import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ProjectsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
