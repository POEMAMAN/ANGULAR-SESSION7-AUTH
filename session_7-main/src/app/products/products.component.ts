
import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor (private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout().subscribe({
      next: (response) => {
      if (response === null) {
        sessionStorage.removeItem('token-products')
        this.router.navigate(['login'])
      }},
      error: () => {

      }
  
    })
  }
}
  


