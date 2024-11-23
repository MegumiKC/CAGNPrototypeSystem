import { Component } from '@angular/core';
import { TiMenuItem } from '@opentiny/ng';
import { TiNavMenuItem } from '@opentiny/ng';
import { TiNavModule } from '@opentiny/ng';
import { TiButtonModule } from '@opentiny/ng';

@Component({
  selector: 'app-nav',
  imports: [TiNavModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.less'
})
export class NavComponent {
  activeId:string = '1'
  items: TiNavMenuItem[] = [
    { id: '1', label: '介绍' },
    { id: '2', label: '普通图像' },
    { id: '3', label: '噪声图像' }
  ];
}
