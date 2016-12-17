import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'makapp',
  templateUrl: "../main.html",
})

RouterModule.forRoot([{
  path: 'projects',
  component: ProjectsComponent,
}])

    export class AppComponent {
  name = 'Angular';
}
