import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  _screenshot = new BehaviorSubject<string | null>(null);
  screenshot$ = this._screenshot.asObservable();

  openScreenshot(screenshot: string | null): void {
    this._screenshot.next(screenshot);
  }

  closeScreenshot(): void {
    this._screenshot.next(null);
  }
}
