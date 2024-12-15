import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../../shared/services/user/user.service';
import { isPlatformBrowser } from '@angular/common';
import { Profile } from '../../../../shared/interfaces/profile';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, RouterLinkActive, RouterLink, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private _UserService = inject(UserService);
  private _Plat = inject(PLATFORM_ID);
  profile: WritableSignal<Profile> = signal({})
  ngOnInit() {
    if(isPlatformBrowser(this._Plat)){
      this.getProfile();
    }
  }
  getProfile(){
    this._UserService.getProfile().subscribe({
      next: (res)=>{
        this.profile.set(res);
        console.log(this.profile())
      }
  })
}
Logout(){
  this._UserService.clearSession();
  
}
}
