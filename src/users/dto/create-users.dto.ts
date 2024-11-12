import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto{
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  role?: number
}