import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
   @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // {类型的定义}
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  // 在shared里有了商品的类型定义，引用
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    // 事件传递
    this.ingredientAdded.emit(newIngredient);
  }

}
