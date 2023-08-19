import {  
  Component, 
  EventEmitter, 
  OnInit,
  Output,
  HostListener
  } from '@angular/core';

  //import {authService} from '../auth/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent {
  
  get isUserLoggedIn(): boolean {
    //por ahora solo retorno true
    return true;
  }
  logOut(): void {
    // usa authService aun no declarado
    console.log('LogOut....');
  }

  ngOnInit():void {}

  @Output() closerDrawer = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closerDrawer.emit();
  }


  constructor(){};
}
