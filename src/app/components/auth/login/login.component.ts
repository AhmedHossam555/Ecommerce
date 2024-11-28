import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../../shared/interfaces/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _UserService = inject(UserService);
  private _Router = inject(Router);
  private _toastr = inject(HotToastService);
  isVisisble:WritableSignal<boolean> = signal(false);

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  })
  onSubmit(){
    this.loginForm.markAllAsTouched;
    console.log(this.loginForm.value)
  }
  visiableControl(){
    this.isVisisble.update((val)=> val =  !val);
    console.log(this.isVisisble())
  }
}
