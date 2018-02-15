import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  constructor(private el: ElementRef) {}

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const dropzone = event.target;
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId).cloneNode(true) as any;

    dropzone.appendChild(droppedElement);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {

  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {

  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {

  }
}
