import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBookDto } from '../dto/create-book.dto';
import {Book} from "../entities/book.entity"
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()

export class BookRepository {
  constructor(private  readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const existingBook = await this.prisma.book.findUnique({
      where: {
        code: createBookDto.code,
      },
    });
    if (existingBook) {
      throw new NotFoundException('A book with this code already exists');
    }
    return this.prisma.book.create({
      data: createBookDto,
    });
  }


  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany()
  }

  async findOne(code: number): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: {
        code,
      },
    });

    if (!book) {
      throw new NotFoundException(`Book with code ${code} not found`);
    }
    return book;
  }


  async update(code: number, updateBookDto: UpdateBookDto) {
    const book = await  this.prisma.book.findUnique({
      where: {
        code
      }
    })

    if(!book){
      throw new NotFoundException("Book not found please try again");
    }

    return this.prisma.book.update({
      where: {
        code
      },
      data: updateBookDto
    })
  }

  async remove(int: number): Promise<Book> {
    return this.prisma.book.delete({
      where: {
        int,
      }
    });
  }

}