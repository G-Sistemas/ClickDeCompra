import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-form-component',
  imports: [CommonModule],
  templateUrl: './toggle-form-component.component.html',
  styleUrl: './toggle-form-component.component.css'
})
export class ToggleFormComponentComponent {
  showform = false;
  
  Toogle(){
    this.showform = !this.showform;
  }
}
