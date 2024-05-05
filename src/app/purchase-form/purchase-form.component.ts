import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css'],
  imports: [FormsModule]
})
export class PurchaseFormComponent {
  product = {
    name: '',
    availableQuantity: 0
  };
  purchaseQuantity: number = 0;

  onSubmit() {
    console.log('Producto:', this.product);
    console.log('Cantidad a Comprar:', this.purchaseQuantity);
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
  }
}
