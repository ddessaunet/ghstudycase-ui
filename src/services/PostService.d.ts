import { User } from './UserService.d';

export interface Post {
  id: string;
  image: string;
  likes: 77;
  tags: string[];
  text: string;
  publishDate: Date;
  owner: User;
}
