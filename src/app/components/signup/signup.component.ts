import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false
  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
  }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authservice.createUser(form.value.email, form.value.password)
  }
}
