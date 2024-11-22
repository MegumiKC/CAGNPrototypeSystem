import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { IntroduceImageComponent } from "../introduce-image/introduce-image.component";
import { UploadImageComponent } from "../upload-image/upload-image.component";

@Component({
  selector: 'app-system-page',
  imports: [NavComponent,IntroduceImageComponent,UploadImageComponent],
  templateUrl: './system-page.component.html',
  styleUrl: './system-page.component.less'
})
export class SystemPageComponent {

}
