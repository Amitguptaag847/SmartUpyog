import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrimaryinputComponent } from './primaryinput/primaryinput.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(PrimaryinputComponent) primaryinput;

  showPrimaryInput_Parent = false;
  showOutput = true;
  showGetStartedButton = true;

  particlesStyle: object = {};
  particlesParams: object = {};
  particlesWidth: number = 100;
  particlesHeight: number = 100;

  @ViewChild('logo', { read: ElementRef }) public logo: ElementRef<any>;

  onGetStarted(): void {
    this.showGetStartedButton = false;
    this.showPrimaryInput_Parent = true;
    this.logo.nativeElement.style.width = '35%';
    this.logo.nativeElement.style.transform = 'translate(-50%,-250px)';
  }

  receiveData($event) {
    this.showPrimaryInput_Parent = $event;
    this.showGetStartedButton = true;
    this.logo.nativeElement.style.width = '50%';
    this.logo.nativeElement.style.transform = 'translate(-50%,-80%)';
  }

  ngOnInit() {
    this.particlesStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.particlesParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }
}
