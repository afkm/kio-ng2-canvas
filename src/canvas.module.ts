import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { CanvasComponent } from './components/canvas/canvas.component'

import { CANVAS_RENDERERS } from './injection/renderer.token'
export { CANVAS_RENDERERS } from './injection/renderer.token'
import { CANVAS_MODULE_CONFIG } from './injection/config.token'
export { CANVAS_MODULE_CONFIG } from './injection/config.token'

import { CanvasRenderer, CanvasRendererFactory } from './interfaces/renderer'
export { CanvasRenderer, CanvasRendererFactory } from './interfaces/renderer'
import { CanvasModuleConfig } from './interfaces/config'
export { CanvasModuleConfig } from './interfaces/config'
import { Size } from './interfaces/size'
export { Size } from './interfaces/size'

import { ImageURLResolver } from './resolver/image-url.resolver'


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
    },
    {
      provide: CANVAS_MODULE_CONFIG,
      useValue: {
        baseURL: 'https://kioget.37x.io/src'
      }
    },
    ImageURLResolver
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
