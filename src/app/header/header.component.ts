import {Component, EventEmitter,Output} from "@angular/core";

// EventEmitter 事件发射器
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
