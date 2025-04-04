import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userData: {
    username: string;
    password: string;
    role: string;
  }) {
    return this.prisma.user.create({
      data: userData,
    });
  }

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user || user.password !== password) return null;
    return {
      username: user.username,
      role: user.role,
      favorites: user.favorites,
    };
  }

  async getUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async updateFavorites(username: string, app: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }
    // Ensure favorites is always an array
    const currentFavorites = user.favorites ?? [];
    console.log('currentFavorites =>', currentFavorites.includes(app));
    const updatedFavorites = currentFavorites.includes(app)
      ? currentFavorites.filter((fav) => fav !== app) // Remove if already favorited
      : [...currentFavorites, app]; // Add if not already favorited
    console.log('updatefavorites =>', updatedFavorites);
    return this.prisma.user.update({
      where: { username },
      data: { favorites: updatedFavorites },
    });
  }
}
