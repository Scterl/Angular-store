 import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Commodity} from "../commodity.model";

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit{
  @Output() commodityWasSelected = new EventEmitter<Commodity>();

  commodities: Commodity[] = [
    new Commodity('可可', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('啤酒', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('大香肠', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
  ];


  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(commodity: Commodity){
    this.commodityWasSelected.emit(commodity);
  }
}
