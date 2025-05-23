import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [ CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent implements OnInit {
    products: any[] = [];
    traducciones: any = {
    'Decoration Swing': 'Columpio de decoración',
    'Family Tree Photo Frame': 'Marco de fotos del árbol genealógico',
    'House Showpiece Plant': 'Planta de exhibición de la casa',
    'Plant Pot': 'Maceta',
    'Table Lamp': 'Lámpara de mesa'
};
    constructor(private apiService: ApiService) {}

     ngOnInit() {
      this.apiService.getPosts().subscribe(response => {
        this.products = response.products;  
        this.products.forEach(datos => {
          console.log(this.traducciones[datos.title])
        if(this.traducciones[datos.title]) {
          datos.title = this.traducciones[datos.title];
        }
      });
     });    
    }
}
