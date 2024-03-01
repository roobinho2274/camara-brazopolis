import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<any | null>(null);
  get getListask() {
    return this.#setListTask.asReadonly();
  }
  public httpListTask$():Observable<any>{
    return this.#http.get<any>(this.#url()).pipe(
      shareReplay(),
      tap((res)=>this.#setListTask.set(res))
    );
  }
}
