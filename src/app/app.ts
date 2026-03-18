import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home'
import {RouterModule, RouterLink} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule, Home, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'assignment-3-homes-app';
}
