import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { Component } from '@angular/core';
import { CanvasRenderer, Size } from '../../src/canvas.module'
import { canvasRendererFactory } from '../../src/renderer/image.renderer'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  canvasWidth=Observable.of(480)
  canvasHeight=Observable.of(320)


  imageRenderer:CanvasRenderer=canvasRendererFactory('https://kioget.37x.io/img/cj5ti14kl00003i5xynw85xzh/de_DE?w=740&h=1050&dpr=1&fit=crop&fm=jpg')
}
