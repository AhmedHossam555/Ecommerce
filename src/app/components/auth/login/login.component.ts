import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isVisisble:WritableSignal<boolean> = signal(false);

  visiableControl(){
    this.isVisisble.update((val)=> val =  !val);
    console.log(this.isVisisble())
  }
}
