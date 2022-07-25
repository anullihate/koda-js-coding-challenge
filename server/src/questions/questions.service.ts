import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuestionsService {
  async findAll(): Promise<Question[]> {
    let questions: Question[];
    try {
      const dataString = await readFile(
        join(process.cwd(), '/data/questions.json'),
        'utf-8',
      );
      questions = JSON.parse(dataString).results as Question[];
    } catch (error) {
      throw error;
    }
    return questions;
  }
}
