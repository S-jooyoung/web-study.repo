import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Injectable()
export class ComputerService {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  operate(): string {
    const cpuResult = this.cpuService.compute(1, 2);
    const diskResult = this.diskService.readData();
    console.log(`Computer Operation Results:\n${cpuResult}\n${diskResult}`);
    return 'Computer operation completed successfully';
  }
}
