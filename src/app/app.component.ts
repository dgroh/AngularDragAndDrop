import { Component, OnInit } from '@angular/core';
import * as SvgPanZoom from 'svg-pan-zoom';

const svgPanZoom = SvgPanZoom;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    svgPanZoom('#dropzone', {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: false,
      center: true,
      minZoom: 0.1
    });
  }
}
