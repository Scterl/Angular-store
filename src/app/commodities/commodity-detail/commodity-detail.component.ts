import {Component, Input} from '@angular/core';
import {Commodity} from "../commodity.model";

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.css']
})
export class CommodityDetailComponent {
  @Input() commodity: Commodity;
}
