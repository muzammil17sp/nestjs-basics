import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { CheckAdminGuard } from 'src/check-admin/check-admin.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(@Query('gender') gender: string) {
    return this.userService.getUsers(gender);
  }

  @Get('/:id')
  getSingleUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userService.getSingleUser(id);
    } catch (error) {
      throw new NotFoundException({ error: error.message });
    }
  }

  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatUserDto,
  ) {
    return this.userService.updateUser(id, data);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }

  @Post()
  @UseGuards(CheckAdminGuard)
  createUser(@Body(new ValidationPipe()) data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
