import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb+srv://trisna:toSfHv4wyi15GMuo@cluster0.ns9a2up.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}