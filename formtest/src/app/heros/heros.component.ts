import { Component } from '@angular/core';
import { Equipment } from '../equipment';
import { EQUIPMENT } from '../mock-equipment';
import { EquipmentService } from '../service/equipment.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'address'];
  equips_data: Equipment[] = [];

  constructor(private equipmentService: EquipmentService ){}

  ngOnInit(): void {
    this.getEquipments();
  }

  getEquipments(): void{
    this.equips_data = this.equipmentService.getEquipment();
  }

  selectEquipment?: Equipment;
  // 選擇設備
  onSelect(equip: Equipment): void{
    this.selectEquipment = equip;
  }
}
