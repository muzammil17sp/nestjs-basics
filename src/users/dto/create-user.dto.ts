import { IsString, Length, IsInt, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 255) // Specify the minimum and maximum length
  name: string;

  @IsInt()
  phone: number;

  @IsIn(['male', 'female'])
  gender: string;
}
