import { Module } from '@nestjs/common';
import { BlogEntriesController } from './blog-entries.controller';
import { BlogEntriesService } from './blog-entries.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BlogEntriesController],
  providers: [BlogEntriesService],
})
export class BlogEntriesModule {}
