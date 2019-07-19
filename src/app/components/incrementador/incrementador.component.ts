import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    // const elemHTML = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(valor) {
    if (this.progreso === 0) {
      if (valor > 0) {
        this.progreso = this.progreso + valor;
        this.cambioValor.emit( this.progreso );
      } else {
        return;
      }
    } else {
      if (this.progreso === 100) {
        if (valor < 0) {
          this.progreso = this.progreso + valor;
          this.cambioValor.emit( this.progreso );
        } else {
          return;
        }
      } else {
        this.progreso = this.progreso + valor;
        this.cambioValor.emit( this.progreso );
      }
    }
    this.txtProgress.nativeElement.focus();
  }

}
