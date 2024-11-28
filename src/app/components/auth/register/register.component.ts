import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private _UserService = inject(UserService);
  
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
    this._UserService.register(this.registerForm.value).subscribe({
      next: (res)=>{
        console.log(res)
      },
      error: (err)=>{
        console.log(err.error.message);
        this.errorMsg.set(err.error.message);
      }
    })
 
  }
  visiableControl(){
    this.isVisiable.update((val)=> val = !val);
  }
}
