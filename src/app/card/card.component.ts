import { Component, Input } from '@angular/core';
import {
  faCircleInfo,
  faClose,
  faCode,
  faHelmetSafety,
} from '@fortawesome/free-solid-svg-icons';

import { OverlayService } from '../overlay.service';

@Component({
  selector: 'mw-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() appUrl?: string;
  @Input() githubUrl?: string;
  @Input() screenshots?: string[];
  @Input() isUnderConstruction = false;

  isDescriptionOpen = false;
  isScreenshotEnlarged = false;

  faCircleInfo = faCircleInfo;
  faClose = faClose;
  faCode = faCode;
  faHelmetSafety = faHelmetSafety;

  constructor(private overlayService: OverlayService) {}

  onScreenshotSelect(screenshot: string) {
    this.overlayService.openScreenshot(screenshot);
  }
}
