import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/provider/auth.service';
import { HashingProvider } from 'src/auth/provider/hashing.provider';

@Injectable()
export class UsersService {

  constructor (
    private readonly prisma: PrismaService,

    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider
  ) {

  }

  async create(createUserDto: CreateUserDto) {

    const user = await this.prisma.user.create({data: {
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password)
    }});

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
