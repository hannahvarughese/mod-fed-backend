import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.usersService.validateUser(body.username, body.password);
  }

  @Post('register')
  async register(@Body() userData) {
    return this.usersService.createUser(userData);
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.usersService.getUserByUsername(username);
  }

  @Put(':username/favorites')
  async updateFavorites(@Param('username') username: string, @Body() body) {
    return this.usersService.updateFavorites(username, body.app);
  }
}
