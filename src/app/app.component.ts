import { Component, OnInit } from '@angular/core';
import { SVGService } from './svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private svgService: SVGService) {
  }

  ngOnInit(): void {
    this.svgService.initializePanZoom();
  }
}
