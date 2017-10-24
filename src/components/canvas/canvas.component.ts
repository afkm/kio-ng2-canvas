import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/zip'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/concatMap'

import { 
  Component, Input, Inject,
  OnChanges, SimpleChange, SimpleChanges,
  ViewChild, ElementRef,
  OnInit,
  EventEmitter
} from '@angular/core'

import { Size } from '../../interfaces/size'
import { CanvasRenderer } from '../../interfaces/renderer'
import { CANVAS_RENDERERS } from '../../injection/renderer.token'

@Component({
  selector: 'kio-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor (  
      @Inject(CANVAS_RENDERERS) protected defaultRenderers:CanvasRenderer[]
    ) {

  }

  @Input('width') canvasWidth:Observable<number>
  @Input('height') canvasHeight:Observable<number>

  canvasElementWidth:number=0
  canvasElementHeight:number=0

  @Input() renderer:CanvasRenderer=this.defaultRenderers[0]

  @ViewChild('canvas') canvas:ElementRef

  private _sizeEmitter:EventEmitter<Size>=new EventEmitter()

  elementSize:Observable<Size>=this._sizeEmitter.asObservable()

  private renderSubscription = this._sizeEmitter.concatMap ( size => {

    const context = this.getContext()
    return this.renderer ( context, size )

  } ).subscribe ( done => {
    console.log( 'rendered canvas' )
  } )

  protected getContext () {
    const canvas:HTMLCanvasElement = this.canvas.nativeElement
    return canvas.getContext('2d')
  }

  ngOnInit () {
    Observable.zip(this.canvasWidth,this.canvasHeight).map ( ([width,height]) => {
      return {
        width, 
        height
      }
    } ).subscribe ( size => {
      this.canvasElementHeight = size.height
      this.canvasElementWidth = size.width
      this._sizeEmitter.emit(size)
    } )

  }

}
