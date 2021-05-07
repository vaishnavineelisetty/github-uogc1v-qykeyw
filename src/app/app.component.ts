import { Component } from "@angular/core";
import { Movies } from "./movies";
import { SevicingService } from "./sevicing.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Ivy Eats";
  page: boolean[] = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  locations = [
    { id: null, name: "Location" },
    { id: "Hyderabad", name: "Hyderabad" },
    { id: "Vijayawada", name: "Vijayawada" },
    { id: "Mumbai", name: "Mumbai" },
    { id: "Delhi", name: "Delhi" }
  ];
  constructor(private ser: SevicingService) {}
  movie: Movies[] = this.ser.cinema;
  Nav(n: number, s: string) {
    for (let i = 0; i < this.page.length; i++) this.page[i] = false;
    this.page[n] = true;
    this.ser.setCategory(s);
  }
}
