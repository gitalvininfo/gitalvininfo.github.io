import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'facebook-messenger';

  constructor(private facebookService: FacebookService) {
    const initParams: InitParams = {
      appId: '689653478763826',
      xfbml: true,
      version: 'v2.8'
    };

    facebookService.init(initParams);
  }

  ngOnInit(): void {
  }

}
