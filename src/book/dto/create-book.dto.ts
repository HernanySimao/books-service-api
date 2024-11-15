import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  autor: string;

  @IsNotEmpty()
  code: number;
}
