import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dulcesysnacks',
  templateUrl: './dulcesysnacks.component.html',
  styleUrls: ['./dulcesysnacks.component.css']
})
export class DulcesysnacksComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectSnacks() {
    this.router.navigate(['snacks']);
  }

}
