import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const apiKey = environment.googleMapsApiKey;

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {

  mapHeading: string = "Know Your Property's Location Here!!!";
  apiKey: string = environment.googleMapsApiKey;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.apiKey = environment.googleMapsApiKey;
    this.initMap();
  }

  initMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12.9716, lng: 79.1594 },
        zoom: 6
      });

    const locations = [
      { position: { lat: 11.73062, lng: 75.885815 }, icon: '../assets/land.png', info: 'Butuan 45' },
      { position: { lat: 15.42006, lng: 74.279150 }, icon: '../assets/land.png', info: 'Samp Land Fields' },
      { position: { lat: 13.13585, lng: 77.517780 }, icon: '../assets/commercial.png', info: 'Ingko Sand Factory D4' },
      { position: { lat: 13.30082, lng: 80.104653 }, icon: '../assets/commercial.png', info: 'The Glass Grande Maison B' },
      { position: { lat: 11.9139, lng: 79.8145 }, icon: '../assets/industrial.png', info: 'Ingko Sand Factory D45' },
      { position: { lat: 16.5062, lng: 80.6480 }, icon: '../assets/industrial.png', info: 'La Grande Maison Certy C' },
      { position: { lat: 10.7852, lng: 79.1391 }, icon: '../assets/residential.png', info: 'Shoebox Morty' },
      { position: { lat: 15.3647, lng: 75.1239 }, icon: '../assets/residential.png', info: 'Greenwood Darf House 34 T' },
      { position: { lat: 13.9299, lng: 75.5681 }, icon: '../assets/residential.png', info: 'EcoStay D 45-T' },
      { position: { lat: 9.9312, lng: 76.2673 }, icon: '../assets/residential.png', info: 'Homemaker Grande' }
    ];

    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: location.position,
        map: map,
        icon: {
          url: location.icon,
          scaledSize: new google.maps.Size(40, 40)
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: location.info
      });

      marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infoWindow.close();
      });

      marker.addListener('click', () => {
        this.router.navigate(['../properties']);
      });

    });
  }
}
}
