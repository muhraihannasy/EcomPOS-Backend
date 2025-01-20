import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TenantsService {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create(createTenantDto: CreateTenantDto) {
    const get_last_sequence = await this.prisma.tenant.aggregate({ _max: { id: true } });
    const last_sequence = get_last_sequence._max.id + 1;

    const generate_code = this.generateCode(last_sequence);

    const tenant = await this.prisma.tenant.create({
      data: {
        ...createTenantDto,
        code: generate_code,
        service_charge: 0,
        tax: 0,
        expired_at: null,
      }
    });

    return tenant;
  }

  findAll() {
    return `This action returns all tenants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }

  generateCode(sequence: number) {
    const code = sequence.toString().padStart(5, '0');
    return `ECO-${code}`
  }
}
