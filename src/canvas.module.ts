import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { CanvasComponent } from './components/canvas/canvas.component'

import { CANVAS_RENDERERS } from './injection/renderer.token'
export { CANVAS_RENDERERS } from './injection/renderer.token'
import { CanvasRenderer, CanvasRendererFactory } from './interfaces/renderer'
export { CanvasRenderer, CanvasRendererFactory } from './interfaces/renderer'
import { Size } from './interfaces/size'
export { Size } from './interfaces/size'

export function defaultRenderer ( context:CanvasRenderingContext2D, size:Size ) {
  return Observable.of(false)
}

@NgModule({
  imports: [CommonModule],
  declarations: [CanvasComponent],
  providers: [ 
    {
      provide: CANVAS_RENDERERS,
      useValue: [
        defaultRenderer
      ]
    }
  ],
  entryComponents: [CanvasComponent],
  exports: [CommonModule,CanvasComponent]
})
export class KioNg2CanvasModule {

  public static forRoot ():ModuleWithProviders {
    return {
      ngModule: KioNg2CanvasModule,
      providers: []
    }
  }
}
