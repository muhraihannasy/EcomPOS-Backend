import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { RegisterAuthDTO } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() registerAuthDTO: RegisterAuthDTO) {
    return this.authService.register(registerAuthDTO);
  }
}
