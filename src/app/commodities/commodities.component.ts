import { Component } from '@angular/core';
import {Commodity} from "./commodity.model";

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent {
  selectedCommodity: Commodity;
}
