import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

  private posts: Post[] = [
    {
      title: "Mon premier post",
      content: "test description",
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: "Mon deuxiéme post",
      content: "test description",
      loveIts: 1,
      createdAt: new Date()
    },
    {
      title: "Encore",
      content: "test description",
      loveIts: -2,
      createdAt: new Date()
    }
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePost() {

  }

  getPosts() {

  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePost();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePost();
    this.emitPosts();
  }

  switchOnOne(i: number) {
    this.posts[i].loveIts++;
    this.emitPosts();

  }

  switchOffOne(i: number) {
    this.posts[i].loveIts--;
    this.emitPosts();

  }

}
