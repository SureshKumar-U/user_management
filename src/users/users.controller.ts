import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  public getAllUsers() {
    return 'Get All users';
  }
  @Post('/')
  public createUser() {
    return 'User created Successfully';
  }
  @Put('/:id')
  public updatedUser() {
    return 'User updated successfully';
  }
  @Delete('/:id')
  public deleteUser() {
    return 'user Deleted Successfuly';
  }
}
