import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOverlayWishlist]',
  standalone: true
})
export class OverlayWishlistDirective {


  @HostListener('click') showslide(){
    let wishlist = document.querySelector(".wishlist") as HTMLElement;
    wishlist.classList.add('active');
    document.body.classList.add('stop-scrolling');
    
    let overlay = document.createElement("div");
    overlay.classList.add('overlay');
    document.body.append(overlay);
    document.addEventListener('click',(event)=>{
      const eleCur =  event.target as HTMLElement;
      if(eleCur.classList.contains('overlay') || eleCur.classList.contains('close')){
        overlay.remove();
        wishlist.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
      }
    })

  }

}
