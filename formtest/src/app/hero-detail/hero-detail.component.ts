import { Component, Input } from '@angular/core';
import { Equipment } from '../equipment';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() equipment?: Equipment;
}
