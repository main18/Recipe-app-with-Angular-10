import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    /*@HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }*/  
    constructor(private renderer : Renderer2, private elRef : ElementRef){}
    isClicked : boolean = false;
    @HostListener('document:click', ['$event']) onClick(event: Event){
        //* checking if the click is on the target element itself and toggling based on that :
        this.isClicked = this.elRef.nativeElement.contains(event.target) ? !this.isClicked : false;
        this.isClicked ? this.renderer.addClass(this.elRef.nativeElement, 'open') : this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
}