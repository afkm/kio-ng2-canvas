import { InjectionToken } from '@angular/core'
import { URLResolver } from '../interfaces/url-resolver'

export let URL_RESOLVER:InjectionToken<URLResolver> = new InjectionToken('url_resolver')

