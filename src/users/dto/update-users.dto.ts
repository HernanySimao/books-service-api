import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from '../../users/dto/create-users.dto';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
