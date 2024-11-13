import { Controller, Post, Body, UnauthorizedException, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersRepository } from '../users/repositories/users.repository';
import { CreateUsersDto } from '../users/dto/create-users.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private user: UsersRepository,
  ) {
  }

  @Post('register')
  async register(@Body() createUsersDto: CreateUsersDto) {
    return this.user.createUser(createUsersDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException("Credenciais inválidas");
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout( ) {
    return { message: 'Operação realizado com sucesso' };
  }
}
