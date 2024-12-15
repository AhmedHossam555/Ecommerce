import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './shared/services/user/user.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _UserService = inject(UserService);
  private _Plat = inject(PLATFORM_ID);
  ngOnInit() {
    // if(isPlatformBrowser(this._Plat)){
    //   this._UserService.userToken();
    // }
  }
}
