import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookRepository } from './repositories/book.repository';

@Injectable()
export class BookService {

  constructor(private readonly  bookRepository: BookRepository) {
  }

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.create(createBookDto);
  }

  findAll() {
    return this.bookRepository.findAll();
  }

  findOne(id: number) {
    return this.bookRepository.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(id, updateBookDto);
  }

  remove(id: number) {
    return this.bookRepository.remove(id);
  }
}
