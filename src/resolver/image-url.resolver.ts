import { Injectable } from '@angular/core'
import { URLResolver } from '../interfaces/url-resolver'
import { ImageRendererOptions } from '../renderer/image/interfaces/options'

@Injectable()
export class ImageURLResolver implements URLResolver {


  resolve ( options:ImageRendererOptions ) {

    return ''

  }

}
