import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
    abstract hashPassword(password: string): Promise<string>;
    abstract comparePassword(password: string, hash: string): Promise<boolean>;
}
