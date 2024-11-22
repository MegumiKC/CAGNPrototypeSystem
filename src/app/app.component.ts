import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemPageComponent } from "./system-page/system-page.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SystemPageComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'prototypeSystemApp';
}
