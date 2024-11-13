import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/create-users.dto';

@Injectable()

export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<UsersEntity[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        password: false,
        role: true
      }
    });
  }

  async findOne(id: string ): Promise<UsersEntity> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        role:true,
        password: false
      }
    })
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email : email},
    });
  }

  async createUser(createUserDto: CreateUsersDto): Promise<UsersEntity> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        role: createUserDto.role,
      },
    });
  }

}