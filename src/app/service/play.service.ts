import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Game } from '../model/game-model';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  constructor(private http:HttpClient){}
  baseUrl:string='http://localhost:3100/games';
  getGames(){
    return this.http.get<Game[]>(this.baseUrl)
  }

 
}


