import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOverlay]',
  standalone: true
})
export class OverlayDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('click') showslide(){
    let cart = document.querySelector(".cart") as HTMLElement;
    cart.classList.add('active');
    document.body.classList.add('stop-scrolling');

    
    let overlay = document.createElement("div");
    overlay.classList.add('overlay');
    document.body.append(overlay);
    document.addEventListener('click',(event)=>{
      const eleCur =  event.target as HTMLElement;
      if(eleCur.classList.contains('overlay') || eleCur.classList.contains('close')){
        overlay.remove();
        cart.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
      }
    })

  }

}
