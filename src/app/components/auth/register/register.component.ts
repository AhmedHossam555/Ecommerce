import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  change(event:Event){
    const ele = event.currentTarget as HTMLElement;
    if(ele.classList.contains('fa-eye')){
      ele.classList.add('fa-eye-slash');
      ele.classList.remove('fa-eye');
    }else{
      ele.classList.remove('fa-eye-slash');
      ele.classList.add('fa-eye');
    }
  }
}
