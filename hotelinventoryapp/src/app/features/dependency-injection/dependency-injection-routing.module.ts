import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfigComponent } from './components/app-config/app-config.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { DependencyInjectionComponent } from './components/navigation/dependency-injection.component';

const routes: Routes = [
  { path: '', component: DependencyInjectionComponent },
  { path: 'storage', component: LocalStorageComponent },
  { path: 'app-config', component: AppConfigComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyInjectionRoutingModule {}
