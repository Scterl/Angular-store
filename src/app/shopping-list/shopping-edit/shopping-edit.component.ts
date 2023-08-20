import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // @ViewChild('nameInput') nameInputRef: ElementRef;：
  //
  // 这是一个使用 @ViewChild 装饰器的属性声明。
  // 'nameInput' 是模板中的一个标识符，通常是一个模板引用变量，用于标识模板中的特定元素。
  // nameInputRef 是你在组件中声明的变量，它将持有对模板中标识为 'nameInput' 的元素的引用。
  // ElementRef 是Angular的一个类，用于封装对DOM元素的引用
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
