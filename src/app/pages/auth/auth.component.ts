import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  isLoginPage: boolean = true;
  inputs = Array(4).fill('');

  submit(): void {
    this.isLoginPage = false;
  }
}
