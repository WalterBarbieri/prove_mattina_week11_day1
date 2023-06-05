import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs'

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent implements OnInit {

  sub!: Subscription;
  conteggio: number = 0;

  constructor() { }

  ngOnInit(): void {
    const numeri = new Observable(osservatore => {
      let conta = 0;
      setInterval(() => {
        osservatore.next(conta);
        if (conta === 5) {
          osservatore.complete();
          console.log('Observer Completato');
        }
        if (conta > 6) {
          osservatore.error(new Error('Conta è troppo grande'))
        }
        conta++;
      }, 1000)
    });

    this.sub = numeri.pipe(map((aumenta) => {
      this.conteggio = Number(aumenta);
      return 'Siamo al numero' + aumenta;
    })).subscribe(numero => {
      console.log(numero);
    },(error) => {
      console.log(error);
      alert(error);
    }, () => {
      console.log('Observable Scaricato');

    }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('Observable Scaricato');

  }

}
