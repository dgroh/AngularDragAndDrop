import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  @HostBinding('style.opacity') private opacity;

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    this.opacity = '0.3';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    this.opacity = '1';
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    this.opacity = '1';
  }
}
