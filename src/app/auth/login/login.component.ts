import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  loginData = {
    email: '',
    password: ''
  };

  onLogin() {

    this.authService.login(this.loginData)
      .subscribe({
        next: (response) => {

          console.log(response);

          localStorage.setItem(
            'token',
            response.token
          );

          // alert('Login successful');
          this.router.navigate(['/dashboard'])
        },

        error: (error) => {
          console.error(error);

          alert('Invalid credentials');
        }
      });
  }
}