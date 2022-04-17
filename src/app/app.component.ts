import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { OverlayService } from './overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  selectedScreenshot!: string | null;
  selectedScreenshotSub!: Subscription;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.selectedScreenshotSub = this.overlayService.screenshot$
      .pipe(tap((screenshot) => (this.selectedScreenshot = screenshot)))
      .subscribe();
  }

  ngOnDestroy() {
    this.selectedScreenshotSub.unsubscribe();
  }

  onClickOverlay(event: MouseEvent) {
    const elementClicked = (event.target as HTMLElement).tagName;
    if (elementClicked === 'MW-OVERLAY') {
      // Ensure clicking on the overlaid image itself or its header does not close it
      this.overlayService.closeScreenshot();
    }
  }
}
