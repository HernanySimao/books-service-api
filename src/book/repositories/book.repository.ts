import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBookDto } from '../dto/create-book.dto';
import {Book} from "../entities/book.entity"

@Injectable()

export class BookRepository {
  constructor(private  readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.prisma.book.create({
      data: createBookDto
    })
  }
}