import { InjectionToken } from '@angular/core'
import { CanvasRenderer } from '../interfaces/renderer'

export let CANVAS_RENDERERS:InjectionToken<CanvasRenderer[]> = new InjectionToken('canvas_renderers')
