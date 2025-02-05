import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { createUser } from './dto/create-user.dto';

@Controller()
export class UserController 
{
    constructor(private userService : UserService){}
    @Get('/get')
    findUsers()
    {
        return this.userService.getAllUsers()
    }
    @Post('/set')
    createUser(@Body() dto : createUser)
    {
        this.userService.createUser(dto)
    }
}
