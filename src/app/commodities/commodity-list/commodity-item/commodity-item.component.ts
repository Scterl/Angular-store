import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Commodity } from "../../commodity.model";

@Component({
  selector: 'app-commodity-item',
  templateUrl: './commodity-item.component.html',
  styleUrls: ['./commodity-item.component.css']
})
export class CommodityItemComponent implements OnInit{
  @Input() commodity: Commodity;
  @Output() commoditySelected = new EventEmitter<void>();

  onSelected(){
    this.commoditySelected.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
