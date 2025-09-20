import { Injectable } from '@nestjs/common';
import { CreateUserDTO, GetUsersParamDTO } from './DTO/users.dtos';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  createUser(user: CreateUserDTO) {
    const environment = this.configService.get<string>('ENV');
    console.log(environment);
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
