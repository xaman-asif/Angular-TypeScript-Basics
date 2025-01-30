import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot,} from '@angular/router';
import {Observable} from 'rxjs';
import {CommentService} from '../service/comment.service';
import {Comment} from "../interface/comment";

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements Resolve<Comment[]> {
  constructor(private commentService: CommentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Comment[] | Observable<Comment[]> | Promise<Comment[]> {
    return this.commentService.getComments();
  }
}
