import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { Button } from "./_components/primary-button/primary-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
