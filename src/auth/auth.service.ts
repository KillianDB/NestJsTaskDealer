import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(name: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    const hashedPassword = await hash(password, 9)
    if (user?.password !== hashedPassword) {
      throw new UnauthorizedException();
    }
    const { pass, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}