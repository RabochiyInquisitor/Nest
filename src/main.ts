import { notDeepEqual } from "assert";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function start()
{
    const app = await NestFactory.create(AppModule)

    app.enableCors()

    app.listen(5000)
}

start()