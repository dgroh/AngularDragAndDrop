import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
