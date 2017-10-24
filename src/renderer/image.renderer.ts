import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/merge'

import { CanvasRenderer } from '../interfaces/renderer'
import { Size } from '../interfaces/size'

export function canvasRendererFactory ( url:string ):CanvasRenderer {

  const img = document.createElement('img')

  const loadSource = Observable.fromEvent(img,'load').mapTo(img)
  const errorSource = Observable.fromEvent(img,'error').mergeMap ( event => Observable.throw(new Error(`Some error occurred while loading image "${url}".`)) )

  return ( context:CanvasRenderingContext2D, size:Size ) => {

    img.src = url

    return Observable.merge ( loadSource, errorSource )
      .take(1)
      .catch ( error => {
        console.error(error)
        return Observable.of(false)
      } )
      .map ( image => {
        context.drawImage(image,0,0)
        return true
      } )

  }

}