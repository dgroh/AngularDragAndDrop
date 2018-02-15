import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';
import { SVGService } from './svg.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  constructor(private svgService: SVGService) {}

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const dropzone = event.target;
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId).cloneNode(true) as any;

    dropzone.appendChild(droppedElement);

    const svgPoint = this.svgService.getSVGPoint(event, droppedElement);

    droppedElement.setAttribute('cx', svgPoint.x);
    droppedElement.setAttribute('cy', svgPoint.y);
  }
}
