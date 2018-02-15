import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';
import { SVGService } from './svg.service';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [SVGService],
  bootstrap: [AppComponent]
})
export class AppModule { }
