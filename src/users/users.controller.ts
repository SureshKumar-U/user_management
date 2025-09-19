import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO, GetUsersParamDTO } from './DTO/users.dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers() {
    return 'Get All users';
  }
  @Get(':id')
  getUserById(@Param() params: GetUsersParamDTO) {
    console.log(params);
    return this.userService.findById(params);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDTO) {
    console.log(createUserDto);
    console.log(createUserDto instanceof CreateUserDTO);
    return this.userService.createUser(createUserDto);
  }
  @Put(':id')
  public updatedUser(@Param('id') id: string) {
    return id + 'User updated successfully';
  }
  @Delete(':id')
  public deleteUser() {
    return 'user Deleted Successfuly';
  }
}
