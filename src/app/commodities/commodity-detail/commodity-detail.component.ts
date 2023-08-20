import {Component, Input} from '@angular/core';
import {Commodity} from "../commodity.model";

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.css']
})
export class CommodityDetailComponent {
  // 这是一个输入属性装饰器，用于接收来自父组件的商品对象（类型为 Commodity）
  @Input() commodity: Commodity;
}
