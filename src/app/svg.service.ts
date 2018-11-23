import { Injectable } from '@angular/core';
import * as SvgPanZoom from 'svg-pan-zoom';

const svgPanZoom = SvgPanZoom;

@Injectable()
export class SVGService {
  private panZoomInstance: any;

  constructor() {}

  initializePanZoom() {
    this.panZoomInstance = svgPanZoom('#dropzone', {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: false,
      center: true,
      minZoom: 0.1
    });
  }

  getSVGPoint(event, element): SVGPoint {
    // get the mouse coordinates and set them to the SVG point
    const point = element.viewportElement.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const CTM = element.viewportElement.getScreenCTM();
    const svgPoint = point.matrixTransform(CTM.inverse());

    return svgPoint;
  }
}
