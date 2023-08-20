 import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Commodity} from "../commodity.model";

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit{
  // 这是在子组件中声明的一个输出属性，用于在子组件中触发 commodityWasSelected 事件，
  // 并将选定的商品对象（类型为 Commodity）传递给父组件
  @Output() commodityWasSelected = new EventEmitter<Commodity>();

  commodities: Commodity[] = [
    new Commodity('可可', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('啤酒', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('大香肠', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
  ];


  constructor() { }

  ngOnInit() {

  }

  // 这是子组件中的一个方法，它接收一个 commodity 参数，即用户选择的商品对象。
  // 当调用这个方法时，它会通过 commodityWasSelected 事件发射器触发 commodityWasSelected 事件，并传递选定的商品对象。
  onRecipeSelected(commodity: Commodity){
    this.commodityWasSelected.emit(commodity);
  }
}
