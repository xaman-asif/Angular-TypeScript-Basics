import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './components/navigation/component-communication.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';

const routes: Routes = [
  { path: '', component: ComponentCommunicationComponent },
  { path: 'ng-template', component: NgTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentCommunicationRoutingModule {}
