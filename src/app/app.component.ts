import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user) => {
      if (user) {
        let returnUrl = localStorage.getItem("returnUrl");
        this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
