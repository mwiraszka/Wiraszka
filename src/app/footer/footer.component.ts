import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import packageJson from '../../../package.json';

@Component({
  selector: 'mw-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  version = packageJson.version;

  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
