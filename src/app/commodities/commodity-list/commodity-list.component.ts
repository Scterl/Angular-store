import {Component, OnInit} from '@angular/core';
import {Commodity} from "../commodity.model";

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit{
  commodities: Commodity[] = [
    new Commodity('商品的名字', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('商品的名字', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
    new Commodity('商品的名字', '商品的描述', 'https://img0.baidu.com/it/u=3491821198,1069590474&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'),
  ];
  constructor() { }

  ngOnInit() {

  }
}
