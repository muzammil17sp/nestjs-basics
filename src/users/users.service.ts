import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Demo 1',
      id: 1,
      gender: 'male',
      phone: 1652641312,
    },
    {
      name: 'Demo 2',
      id: 2,
      gender: 'female',
      phone: 1652641512,
    },
    {
      name: 'Demo 3',
      id: 3,
      gender: 'male',
      phone: 1652641521,
    },
  ];

  getUsers(gender: string) {
    if (gender) {
      return this.users.filter((user) => user.gender === gender);
    }
    return this.users;
  }

  getSingleUser(id: number) {
    const singleUser = this.users.find((user) => user.id === id);
    if (!singleUser) {
      throw new Error('User not found');
    }
    return singleUser;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }

  createUser(data: CreateUserDto) {
    const userToCreate = {
      ...data,
      id: Date.now(),
    };
    this.users.push(userToCreate);
    return this.users;
  }

  updateUser(id: number, data) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...data };
      }
      return user;
    });
    return this.users;
  }
}
