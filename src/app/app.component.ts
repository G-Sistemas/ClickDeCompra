import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, UserRegisterComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
}


