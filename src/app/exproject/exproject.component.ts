import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exproject',
  templateUrl: './exproject.component.html',
  styleUrls: ['./exproject.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExprojectComponent implements OnInit {

  

  public projects = [
    {
      title: 'Leafdrop.co',
      imageURL: './assets/img/leafdrop-banner.jpg',
      markup: '<app-contact></app-contact>',
      destination: 'leafdrop',
      description: 
      'LeafDrop.co is a retailer that aims to make a large range of Delta-8 THC products widely available for online purchase and delivery. They also host other resources for educational purposes regarding Delta-8 THC.'
    },
    {
      title: 'ICEWATER',
      imageURL: './assets/img/icewater-banner.jpg',
      markup: '<app-contact></app-contact>', 
      destination: 'icewater',
      description: 'ICEWATER is a digital marketing and solutions platform that handles technology, content management, website upkeep, security and brand awareness utilizing a dynamic subscription model.'
    },
    {
      title: 'GoFile',
      imageURL: './assets/img/gofile-banner.jpg',
      markup: '<app-contact></app-contact>',
      destination: 'gofiles',
      description: 'GoFile.io is a file sharing platform that allows users to share files between each other quickly, anonymously and for free.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openProject() {
    //window.open("www.youtube.com");
    console.log(this.projects[2].destination);
    
  };

}
