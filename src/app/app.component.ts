import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeanApp';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
