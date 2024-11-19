import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  
  constructor(private Ele:ElementRef) { }
  @HostListener("window:scroll") onScroll(){
    const ele = this.Ele.nativeElement as HTMLElement;
    if(window.scrollY > 700){
      ele.classList.add('sticky');
    }else{
      ele.classList.remove('sticky');
    }
  }
}
