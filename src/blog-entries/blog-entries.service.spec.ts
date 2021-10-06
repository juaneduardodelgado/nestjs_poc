import { Test, TestingModule } from '@nestjs/testing';
import { BlogEntriesService } from './blog-entries.service';

describe('BlogEntriesService', () => {
  let service: BlogEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogEntriesService],
    }).compile();

    service = module.get<BlogEntriesService>(BlogEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
