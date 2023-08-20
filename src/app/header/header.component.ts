import {Component, EventEmitter,Output} from "@angular/core";

// EventEmitter 事件发射器
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  // @Output() 装饰器：在Angular中，它用于声明一个输出属性，这样子组件可以向父组件发送数据。
  // EventEmitter<string>()：这是一个用于发出事件的Angular提供的类。
  // 在这里，它被用于创建一个新的事件发射器，用于向父组件发送字符串类型的事件数据。
  @Output() featureSelected = new EventEmitter<string>();

  // 这是调用事件发射器的方法，将特定的 feature 数据发送给父组件。
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
