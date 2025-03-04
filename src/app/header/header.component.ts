import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  isLoggedIn: boolean = false
  loggedUserName: string = ''

  ngOnInit() {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      this.isLoggedIn = true
      this.loggedUserName = JSON.parse(sessionStorage.getItem('user') || '').username
    } else {
      this.isLoggedIn = false
      this.loggedUserName = ""

    }
  }

  logout() {
    sessionStorage.clear()
    localStorage.clear()
    this.isLoggedIn=false
    this.loggedUserName=''
    this.router.navigateByUrl('/')
  }
}
