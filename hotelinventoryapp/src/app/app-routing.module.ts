import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dependency-injection',
    loadChildren: () =>
      import(
        './features/dependency-injection/dependency-injection.module'
      ).then((m) => m.DependencyInjectionModule),
  },
  {
    path: 'component-communication',
    loadChildren: () =>
      import(
        './features/component-communication/component-communication.module'
      ).then((m) => m.ComponentCommunicationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
