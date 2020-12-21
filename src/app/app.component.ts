import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  win = '';
  name = 'Angular ' + VERSION.major;
  display = '?';
  score = 20;
  highScore = 0;
  message = 'Start guessing ...'
  guess = '';
  hidden = Math.floor(Math.random() * 20 + 1); 
  

  onInput(value: string) {
    this.guess = value;
  }  

  onClick() {
    if (!this.guess) {
      this.message = 'Please enter a guess';
    }

    if (parseInt(this.guess) > this.hidden) {
      this.message = 'To high';
      this.score = this.score - 1;
    }else if (parseInt(this.guess) < this.hidden) {
      this.message = 'To low';
      this.score = this.score - 1;
    }else if (parseInt(this.guess) == this.hidden) {
      this.message = 'Correct';
      this.display = this.guess;
      this.win = 'yes';
      if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    }

    if (this.score <= 0) {
      this.message = 'You lost';
      this.win = 'loss';
      this.score = 0;
    }
  }

  onClickA() {
    this.win = '';
    this.display = '?';
    this.score = 20;
    this.message = 'Start guessing...'
    this.hidden = Math.floor(Math.random() * 20 + 1); 
  }
}
