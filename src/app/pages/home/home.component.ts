import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/models/MenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  menuItems: MenuItem[] = [
    {
      title:'3D Graph Plot',
      url:'/graph3d',
      image_src:'assets/icon/graph3d.svg'
    },
    {
      title:'3D Vector Plot',
      url:'/graph3d_vector',
      image_src:'assets/icon/graph3d_vector.svg'
    },
    {
      title:'2D Graph Plot',
      url:'/graph2d',
      image_src:'assets/icon/graph2d.svg'
    },
    {
      title:'2D Vector Plot',
      url:'/graph2d_vector',
      image_src:'assets/icon/graph2d_vector.svg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
