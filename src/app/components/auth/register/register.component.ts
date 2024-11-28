import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private _UserService = inject(UserService);
  private _toast  = inject(HotToastService);
  private _Route = inject(Router);
  isVisiable:WritableSignal<boolean> = signal(false);
  errorMsg: WritableSignal<string[]> = signal([]);

  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(5)]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    avatar: new FormControl('default.jpeg'),
  })
  onSubmit(){
    this.registerForm.markAllAsTouched()
    this._UserService.register(this.registerForm.value).pipe(
      this._toast.observe({
        loading: 'Logging in',
        success:' Congrats ! You are registered',
        error: (err)=>`There was an error: ${err.message}`
      })
    ).subscribe({
      next: (res)=>{
       if(res){
        this._Route.navigate(['/login']);
       }
      },
      error: (err)=>{
        this.errorMsg.set(err.error.message);
      }
    })
  }
  visiableControl(){
    this.isVisiable.update((val)=> val = !val);
  }
}
