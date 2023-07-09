import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const t = 'pawel';

    if (t) {
      return 'Bla';
    }
    return 'Hello World! Pawel 2';
  }
}
