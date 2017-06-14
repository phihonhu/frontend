import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeaxUserInterfaceModule } from 'pixie';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuTitle = 'Ho Nhu Phi';
  listItem = [
    { title: 'Organizations ', link: '/organisations' },
    { title: 'Change password', link: './link2/' },
    { title: 'Bank management', link: './lightpink/' },
    { title: 'Setting', link: './link4/' },
  ];

  menuItems = [
    { iconClass: 'icon-mailbox', badgeNumber: 3, badgeState: 1, caption: 'mailbox', routePath: '/contacts' },
    { iconClass: 'icon-bank', badgeNumber: 3, badgeState: 1, caption: 'bank', routePath: '/uploads' },
    { iconClass: 'icon-bank', badgeNumber: 3, badgeState: 1, caption: 'bank', routePath: '/uploads' },
    { iconClass: 'icon-mailbox', badgeNumber: 3, badgeState: 1, caption: 'mailbox', routePath: '/contacts' },
    { iconClass: 'icon-mailbox', badgeNumber: 3, badgeState: 1, caption: 'mailbox', routePath: '/contacts' },
    { iconClass: 'icon-bank', badgeNumber: 3, badgeState: 1, caption: 'bank', routePath: '/uploads' },
    { iconClass: 'icon-bank', badgeNumber: 3, badgeState: 1, caption: 'bank', routePath: '/uploads' },
    { iconClass: 'icon-mailbox', badgeNumber: 3, badgeState: 1, caption: 'mailbox', routePath: '/contacts' }
  ];

  imageUrl = '../../../assets/peax3-test-bg-image.jpg';

  title: string;
  isMobileNavVisible = false;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const page = window.location.pathname.substring(1, window.location.pathname.length);
    this.title = this.toCamelCase(page);
  }


  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }

  get username(): string {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  showMobileMenu() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  toCamelCase(str: string) {
    return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match: any) {
      return match.charAt(match.length - 1).toUpperCase();
    });
  }

}
