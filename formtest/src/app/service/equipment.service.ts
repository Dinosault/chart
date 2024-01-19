import { Injectable } from '@angular/core';
import { Equipment } from '../equipment';
import { EQUIPMENT } from '../mock-equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor() { }

  getEquipment(): Equipment[] {
    return EQUIPMENT;
  }
}
