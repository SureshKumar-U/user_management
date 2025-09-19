import { Controller, Delete, Get, Ip, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/posts')
  public getAllPosts() {
    return 'All posts';
  }
  @Post('/')
  public getPostById() {
    return 'Get Post By Id';
  }
  @Get('/:id')
  public getUserById() {
    return 'Get the post BY Id';
  }
  @Delete('/:id')
  public deleteUserById(@Ip() ip: any) {
    console.log(ip);
    return 'Delete the post By Id';
  }
}
