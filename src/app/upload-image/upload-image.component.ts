import { Component } from '@angular/core';
import { TiButtonModule } from '@opentiny/ng';

@Component({
  selector: 'app-upload-image',
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.less'
})
export class UploadImageComponent {
  imageSrc: string | null = null;
  SRImageSrc: string | null = null;

  onImageSelected(event: Event): void {
    const target = event.target as typeof event.target & { files?: FileList };
    if (target.files?.length && target.files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result as string;
      };
      reader.readAsDataURL(target.files[0]);
    }
  }

  showSRImage(): void {
    this.SRImageSrc = '../../assets/img003.png'
  }
}
