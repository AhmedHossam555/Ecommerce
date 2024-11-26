import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


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
