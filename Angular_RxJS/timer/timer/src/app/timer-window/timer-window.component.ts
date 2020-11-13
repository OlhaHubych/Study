import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { buffer, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-timer-window',
  templateUrl: './timer-window.component.html',
  styleUrls: ['./timer-window.component.css']
})
export class TimerWindowComponent implements OnInit {

  constructor() {}

  stateStopwatch: any = {
    hours:    '00',
    minutes:  '00',
    seconds:  '00',
  }

  timer: any;
  closeTimer: any;

  sec: number = 0;
  min: number = 0;
  hour: number = 0;
  startFlag:boolean = true;
  
  clearStopwatch() {
    this.closeTimer = clearInterval(this.timer);
    this.startFlag = true;
    this.sec = 0;
    this.min = 0;
    this.hour = 0;

    this.stateStopwatch = {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  startStopwatch() {
    //запуск секундомера
    if(this.startFlag) 
    {
      this.timer = setInterval(() => { 
        if(++this.sec >= 60) { 
          this.sec = 0; 
            if(++this.min >= 60) { 
              this.min = 0;
                if(++this.hour >= 25) {
                  this.hour = 0;
                }
                
                if(this.hour >=1 && this.hour <=9) this.stateStopwatch.hours = "0" + this.hour;
                else this.stateStopwatch.hours = this.hour; 
                this.startFlag = false;
            }
            
            if(this.min >=1 && this.min <=9) this.stateStopwatch.minutes = "0" + this.min;
            else this.stateStopwatch.minutes = this.min; 
            this.startFlag = false;
        }
        
        else if(this.sec >=1 && this.sec <=9) this.stateStopwatch.seconds = "0" + this.sec;
        else this.stateStopwatch.seconds = this.sec; 
        this.startFlag = false;
      }, 1000);
    }
  }

  stopStopwatch() {
    //остановка отсчета времени, останавливает и обнуляет значение секундомера
    this.clearStopwatch();
    this.startFlag = true;
  }
  
  resetStopwatch() {
    //сброс секундомера на 0,  обнуляет секундомер и снова начинает отсчет
    this.clearStopwatch();
    this.startStopwatch();
  }

  pauseStopwatch() {
    //работает на  двойной клик (время между нажатиями не более 300мс), 
    //секундомер должен прекратить отсчет времени,
    //если после него нажать Старт, то возобновлять отсчет
    this.closeTimer = clearInterval(this.timer);
    this.startFlag = true; 
  }

  ngOnInit(): void {

    const startBtn: any = document.querySelector('#start'),
          stopBtn: any = document.querySelector('#stop'),
          pauseBtn: any = document.querySelector('#pause'),
          resetBtn: any = document.querySelector('#reset');

    let stateOfApp = {
      startInProgress: false,
      waitInProgress: false,
      stopInProgress:false,
    }

    //------------------ Start button hundler ---------------
    fromEvent(startBtn, 'click').subscribe(() => {
      if(!stateOfApp.startInProgress) {
        stateOfApp.startInProgress = true;
        console.log("start timer");
        this.startStopwatch();
      }
    });

    //------------------ Reset button hundler ---------------
    fromEvent(resetBtn, 'click').subscribe(() => {
      if(stateOfApp.startInProgress) {
        console.log("reset timer")
        this.resetStopwatch();
      }
      else {
        if(stateOfApp.waitInProgress) {
          stateOfApp.waitInProgress = false;
          stateOfApp.startInProgress = true;
          console.log("reset timer")
          this.resetStopwatch();
        }
        else if(stateOfApp.stopInProgress) {
          stateOfApp.startInProgress = false;
        }
      }
    });

    //------------------ Stop button hundler ---------------
    fromEvent(stopBtn, 'click').subscribe(() => {
      if(stateOfApp.startInProgress) {
        stateOfApp.startInProgress = false;
        stateOfApp.stopInProgress = true;
        console.log("stop timer");
        this.stopStopwatch();
      }
      else {
        if(stateOfApp.waitInProgress) {
          stateOfApp.waitInProgress = false;
          stateOfApp.stopInProgress = true;
          console.log("stop timer")
          this.stopStopwatch();
        }
      }
    });
    
    //------------------ Wait button hundler ---------------
    let oneClickPause = fromEvent(pauseBtn, 'click');
    let bufferForClicks = oneClickPause.pipe(
      debounceTime(300), //set 300ms
    );
    let doubleClickPause = oneClickPause.pipe(
      buffer(bufferForClicks),
      map((bufferCliks => {
        return bufferCliks.length;
      })),
      filter(buffLength => buffLength === 2), //consider: doubleclick is (bufferCliks.length = 2)
    );

    doubleClickPause.subscribe(() => {
      if(stateOfApp.startInProgress) {
        stateOfApp.startInProgress = false;
        stateOfApp.waitInProgress = true;
        stateOfApp.stopInProgress = false;
        console.log('doubleclick');
        this.pauseStopwatch();
      }
    })
  }
  
}
