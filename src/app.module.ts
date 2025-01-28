import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModule } from "./users/user.module";
import { ConfigModule } from "@nestjs/config";
import { UserController } from "./users/user.controller";
import { UserModel } from "./users/user.model";


@Module({
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env"
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: "postgres",
            password: "13241324mark",
            database: "Master",
            models: [UserModel],
            autoLoadModels: true
        }),
        UserModule
    ]
})
export class AppModule
{
    
}