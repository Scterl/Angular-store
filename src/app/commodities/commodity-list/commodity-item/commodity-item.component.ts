import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Commodity } from "../../commodity.model";

@Component({
  selector: 'app-commodity-item',
  templateUrl: './commodity-item.component.html',
  styleUrls: ['./commodity-item.component.css']
})
export class CommodityItemComponent implements OnInit{
  // 这是一个输入属性装饰器，用于接收来自父组件的商品对象（类型为 Commodity）。
  // 父组件可以通过属性绑定将一个商品对象传递给子组件，子组件可以使用这个属性来展示商品的相关信息。
  @Input() commodity: Commodity;

  //这是一个输出属性装饰器，用于声明一个输出属性，允许子组件向父组件发送事件。
  // commoditySelected 是一个事件发射器，用于在用户选择商品时触发一个事件。
  @Output() commoditySelected = new EventEmitter<void>();

  // 综合起来，这个组件的作用是接收一个商品对象（通过 @Input）
  // 并在用户选择商品时触发一个事件（通过 @Output 和 EventEmitter），从而将选择的商品信息传递给父组件。
  onSelected(){
    this.commoditySelected.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
