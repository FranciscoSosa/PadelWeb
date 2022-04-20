import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  element: HTMLElement|null;
  navmenu: HTMLElement|null;


  constructor() {
    this.element = null;
    this.navmenu = null;
  }

  ngOnInit(): void {
  }

  dropdown(): void {

    this.element = document.getElementById('menu_principal');
    this.navmenu = document.getElementById('nav_principal');
    
    let i = this.element!.getAttribute("value");

    if (i === "0") {
        this.navmenu!.setAttribute("class", "nav container-fluid");
        this.navmenu!.classList.remove("col-5");
        this.navmenu!.classList.remove("col-md-7");
        this.element!.classList.remove("d-none");
        this.element!.classList.remove("d-md-flex");
        this.element!.setAttribute("value", "1");
    } else {
        this.navmenu!.classList.add("col-5");
        this.navmenu!.classList.add("col-md-7");
        this.element!.classList.add("d-none");
        this.element!.classList.add("d-md-flex");
        this.element!.setAttribute("value", "0");
    }
    
  }
}
