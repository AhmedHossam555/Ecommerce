import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isVisiable:WritableSignal<boolean> = signal(false);

  visiableControl(){
    this.isVisiable.update((val)=> val = !val);
  }
}
