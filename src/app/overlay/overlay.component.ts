import { Component, Input } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { OverlayService } from '../overlay.service';

@Component({
  selector: 'mw-overlay',
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  @Input() imagePath: string | null = null;
  faClose = faClose;

  constructor(private overlayService: OverlayService) {}

  onClose(): void {
    this.overlayService.closeScreenshot();
  }
}
