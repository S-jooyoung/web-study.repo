import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    const powerStatus = this.powerService.supplyPower(100);
    console.log(`CPU is computing... ${powerStatus}`);
    return a + b;
  }
}
