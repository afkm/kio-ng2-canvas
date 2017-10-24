import { Observable } from 'rxjs/Observable'
import { Size } from './size'


export interface CanvasRenderer {

  ( context:CanvasRenderingContext2D, size:Size ):Observable<boolean>

}

export interface CanvasRendererFactory {

  ( ...args:any[] ):CanvasRenderer

}