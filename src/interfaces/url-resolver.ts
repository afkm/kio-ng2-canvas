import { Observable } from 'rxjs/Observable'

/** interface to implement for resolving URLs for images with specific paremters  */
export interface URLResolver {

  resolve ( ...args:any[] ):Observable<string>|Promise<string>|string

}