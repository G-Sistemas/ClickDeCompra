import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-component-skeleton',
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './component-skeleton.component.html',
  styleUrl: './component-skeleton.component.css'
})
export class ComponentSkeletonComponent {

}
