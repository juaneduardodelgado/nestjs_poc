import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogEntriesModule } from './blog-entries/blog-entries.module';

@Module({
  imports: [BlogEntriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
