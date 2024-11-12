import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from '../../users/dto/create-users.dto';

export class UpdateBookDto extends PartialType(CreateUsersDto) {}
