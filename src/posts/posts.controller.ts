import { Controller, Delete, Get, Post } from '@nestjs/common';

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
  public deleteUserById() {
    return 'Delete the post By Id';
  }
}
