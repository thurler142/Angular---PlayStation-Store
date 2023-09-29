import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-assinaturas',
  templateUrl: './card-assinaturas.component.html',
  styleUrls: ['./card-assinaturas.component.css']
})
export class CardAssinaturasComponent{

  constructor(
    private parametrizador: ActivatedRoute,
    ){
      this.parametrizador.params.subscribe(res => console.log(res))
    }

  @Input()
  assType:string = ''
  @Input()
  assPrice:string = ''
  @Input()
  assDescription:string = ''
}
