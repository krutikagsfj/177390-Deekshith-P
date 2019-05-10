import { Component, OnInit } from '@angular/core';
import { PlayService } from '../service/play.service';
import { Game } from '../model/game-model';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { getQueryPredicate } from '../../../node_modules/@angular/compiler/src/render3/view/util';
import { get } from '../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private playService:PlayService) { }
  prc:Number;
  games:Game[];
  playForm:FormGroup;

  ngOnInit() {
    this.playService.getGames().subscribe(data=>{this.games=data});
  }
onSubmit(){

}
getPrice(game:Game){
  this.prc=game.price;
  localStorage.removeItem("gameprice");
  localStorage.removeItem("gameaName");
  localStorage.setItem("gameprice",game.price.toString());
  localStorage.setItem("gameName",game.gName);
}
}



