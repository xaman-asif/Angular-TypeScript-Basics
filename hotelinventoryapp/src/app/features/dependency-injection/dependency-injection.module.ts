import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DependencyInjectionComponent } from './components/navigation/dependency-injection.component';
import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { AppConfigComponent } from './components/app-config/app-config.component';

@NgModule({
  declarations: [DependencyInjectionComponent, AppConfigComponent],
  imports: [CommonModule, DependencyInjectionRoutingModule, RouterModule],
})
export class DependencyInjectionModule {}
