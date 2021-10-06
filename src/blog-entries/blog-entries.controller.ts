import { Controller, Get, Query } from '@nestjs/common';
import { BlogEntriesService } from './blog-entries.service';

@Controller('blog-entries')
export class BlogEntriesController {
  constructor(private blogEntriesService: BlogEntriesService) {}

  @Get()
  async getPostEntries(@Query() query) {
    const start = query && query.start ? parseInt(query.start) : 1;
    const size = query && query.size ? parseInt(query.size) : 10;
    const posts = await this.blogEntriesService.getPostEntries(start, size);
    return posts;
  }
}
