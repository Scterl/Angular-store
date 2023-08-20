import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { CommoditiesComponent } from './commodities/commodities.component';
import { CommodityDetailComponent } from './commodities/commodity-detail/commodity-detail.component';
import { CommodityListComponent } from './commodities/commodity-list/commodity-list.component';
import { CommodityItemComponent } from './commodities/commodity-list/commodity-item/commodity-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommoditiesComponent,
    CommodityDetailComponent,
    CommodityListComponent,
    CommodityItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
