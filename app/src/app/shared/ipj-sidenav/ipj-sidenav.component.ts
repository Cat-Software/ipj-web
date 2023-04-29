import { Component } from '@angular/core';

@Component({
  selector: 'app-ipj-sidenav',
  templateUrl: './ipj-sidenav.component.html',
  styleUrls: ['./ipj-sidenav.component.css']
})
export class IpjSidenavComponent {
  
  visible: boolean = false;

  public toggle(): void {
    this.visible = !this.visible;
  }
}
