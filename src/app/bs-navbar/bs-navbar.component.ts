import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.scss"],
})
export class BsNavbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
