import { Directive, HostListener } from '@angular/core';
import { SVGService } from './svg.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  private draggingElement: any;

  constructor(private svgService: SVGService) {}

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const dropzone = event.target;
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId) as any;

    dropzone.appendChild(droppedElement);

    const svgPoint = this.svgService.getSVGPoint(event, droppedElement);

    droppedElement.setAttribute('draggable', true);

    droppedElement.setAttribute('cx', svgPoint.x);
    droppedElement.setAttribute('cy', svgPoint.y);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event): void {
    if (this.draggingElement) {
      const svgPoint = this.svgService.getSVGPoint(event, this.draggingElement);
      this.draggingElement.setAttribute('cx', svgPoint.x);
      this.draggingElement.setAttribute('cy', svgPoint.y);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    if (event.target.getAttribute('draggable')) {
      this.draggingElement = event.target;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event): void {
    this.draggingElement = null;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    this.draggingElement = null;
  }
}
