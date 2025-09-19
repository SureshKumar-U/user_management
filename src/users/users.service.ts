import { Injectable } from '@nestjs/common';
import { CreateUserDTO, GetUsersParamDTO } from './DTO/users.dtos';

@Injectable()
export class UsersService {
  createUser(user: CreateUserDTO) {
    return user;
  }

  updateUser() {
    return 'user Updated';
  }

  deleteUser() {
    return 'user deleted';
  }
  findAll() {
    return 'users listed succesfully';
  }

  findById(params: GetUsersParamDTO) {
    console.log(params);
    return 'single user fetched succesfully';
  }
}
