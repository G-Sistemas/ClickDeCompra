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
    constructor(private apiService: ApiService) {}

     ngOnInit() {
      this.apiService.getPosts().subscribe(response => {
        this.products = response.products;  
      });    
    }
}
