import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  isbn: string;

  @IsInt()
  publishYear: number;

  @IsOptional()
  @IsBoolean()
  reserved?: boolean;
}