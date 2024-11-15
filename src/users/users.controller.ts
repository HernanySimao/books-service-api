import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode, HttpStatus,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.update(id, updateUsersDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
