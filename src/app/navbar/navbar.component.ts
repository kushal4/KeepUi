import { Router } from '@angular/router';
import { Token } from './../utils/Token';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenObj:Token,private router:Router) { }
  @Output("searchChange") searchChange= new EventEmitter();

  ngOnInit(): void {
  }

  logout(){
    this.tokenObj.remove();
    this.router.navigate(["/login"]);
  }

  filterNotes(searchVal){
      this.searchChange.emit(searchVal);
  }

}
