import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  controllers: [TenantsController],
  providers: [TenantsService],
  imports: [PrismaModule],
  exports: [TenantsService],
})
export class TenantsModule {}
