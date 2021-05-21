import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    // tslint:disable-next-line: no-non-null-assertion
    this.bmi = +this.route.snapshot.paramMap.get('valor')!;
    // utilizar el + es otra manera de parsear de string a number
    // el ! es una manera de quitar la posible opcion de null
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(): void {
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de Peso';
      this.interpretacion =
        'Tienes un peso corporal superior al normal. Intente hacer más ejercicio';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
    } else {
      this.resultado = 'Bajo Peso';
      this.interpretacion =
        'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más';
    }
  }
}
