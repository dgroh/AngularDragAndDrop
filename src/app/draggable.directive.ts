import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('draggable', true);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event) {
      event.preventDefault();
      event.stopPropagation();
  }
}
