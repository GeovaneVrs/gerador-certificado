import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { Button } from "../../_components/primary-button/primary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, Button],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
