import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

const POST_URL_API = 'https://jsonplaceholder.typicode.com/posts';
const POST_COMMENTS_URL_API = 'https://jsonplaceholder.typicode.com/posts/';
const USERS_URL_API = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class BlogEntriesService {
  constructor(private readonly httpService: HttpService) {}

  async getPostEntries(start = 1, size = 5): Promise<any> {
    const response = await this.httpService.get(POST_URL_API).toPromise();
    let posts = response.data;
    const users = await this.getUsers();

    // Filter to return only posts that starts on the right index and
    // return the max number required
    posts = posts.filter((post, idx) => idx >= start - 1 && idx < start + size);

    // Attach the user to each post
    posts = await Promise.all(
      posts.map(async (post: any) => {
        const user = users.find((user: any) => user.id === post.userId);
        post.user = user;

        const comments = await this.getPostComments(post.id);
        post.comments = comments;
        return post;
      }),
    );

    return posts;
  }

  async getUsers(): Promise<any> {
    const response = await this.httpService.get(USERS_URL_API).toPromise();
    return response.data;
  }

  async getPostComments(postId: string): Promise<any> {
    let response = null;
    try {
      response = await this.httpService
        .get(`${POST_COMMENTS_URL_API}${postId}/comments`)
        .toPromise();
    } catch (e) {
      response = { data: [] };
    }
    return response.data;
  }
}
