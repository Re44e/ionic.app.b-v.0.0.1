import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,

  ) {
    this.initializeApp();
    //this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  home(){
    this.router.navigate(['/home'])
    this.menu.toggle();

  }
  schedule(){
    this.router.navigate(['/schedule'])
    this.menu.toggle();

  }
  specialist(){
    this.router.navigate(['/specialist'])
    this.menu.toggle();
  }
  patients(){
    this.router.navigate(['/patients'])
    this.menu.toggle();
  }

}
