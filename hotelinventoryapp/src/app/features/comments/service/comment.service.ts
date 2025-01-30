import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Comment} from '../interface/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
