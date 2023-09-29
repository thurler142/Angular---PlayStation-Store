import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})
export class MenuDropdownComponent {
  showFiller = false;
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  public showButton = false; // Inicialmente, o botão é visível

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Verifique o tamanho da tela e atualize a variável showButton
    if (window.innerWidth >= 763) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
  }
}
