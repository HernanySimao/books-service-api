import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from '../prisma/prisma.service';
import { BookRepository } from './repositories/book.repository';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService, BookRepository],
})
export class BookModule {}
