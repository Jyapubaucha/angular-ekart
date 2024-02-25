import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})

export class SetBackground implements OnInit {

    // private element: ElementRef;
    // private renderer: Renderer2;
    // @Input() backColor: string = '#36454F';
    // @Input() textColor: string = 'white';

    @Input('setBackground') changeBackAndTextColor: {backColor: string, textColor: string};

    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element
        // this.renderer = renderer;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = '#FFFFFF'; 
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.changeBackAndTextColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color',this.changeBackAndTextColor.textColor);
    }
}