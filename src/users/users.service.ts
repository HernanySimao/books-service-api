import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  findAll() {
    return this.userRepository.getAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUsersDto: UpdateUsersDto) {
    return this.userRepository.update(id, updateUsersDto)
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }

}

