import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { createUser } from './dto/create-user.dto';

@Injectable()
export class UserService 
{
    constructor(@InjectModel(UserModel) private readonly userRepository : typeof UserModel) {

    }
    async getConcretUser()
    {

    }
    async getAllUsers()
    {
        const users = this.userRepository.findAll()
        return users

    }
    async createUser( dto : createUser)
    {
        const user = await this.userRepository.create(dto)
        return user
    }
    async changeUserRule()
    {

    }
}
