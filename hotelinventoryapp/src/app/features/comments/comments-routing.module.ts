import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from './component/comments.component';
import {CommentGuard} from './guard/comment.guard';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {
      comments: CommentGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
