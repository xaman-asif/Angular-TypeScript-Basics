import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'hinv-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  commentString$ = this.activatedRoute.data.pipe(pluck('comments'));
  comments$ = this.commentService.getComments();

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => console.log(data['comments']));
  }
}
