import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { AnotherComponentComponent } from './components/another-component/another-component.component';

@NgModule({
  declarations: [
    NgTemplateComponent,
    AnotherComponentComponent
  ],
  imports: [CommonModule, ComponentCommunicationRoutingModule],
})
export class ComponentCommunicationModule {}
