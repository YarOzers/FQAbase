import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigateComponent} from "./views/navigate/navigate.component";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LogingComponent} from "./views/loging/loging.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LogingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FQAbase';
}
