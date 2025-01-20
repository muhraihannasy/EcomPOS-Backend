import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDTO } from '../dto/register-auth.dto';
import { TenantsService } from 'src/tenants/tenants.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class AuthService {

  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,

    @Inject(forwardRef(() => TenantsService))
    private readonly tenantService: TenantsService,
  ) {}


  async register(data: RegisterAuthDTO) {
    try {
       const tenant = await  this.tenantService.create({
            name: data.tenant_name,
            address: data.tenant_address,
        });

        const user = await  this.userService.create({
            tenant_id: tenant.id,  
            name: data.name,
            email: data.email,
            password:data.password,
            phone: data.phone
        });


        return {
            ...user,
            tenant,
        };

    } catch(err) {

    }
  }
}
