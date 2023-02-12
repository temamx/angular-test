import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnterYourCodePage } from './pages/enter-your-code/enter-your-code.page';
import { RegistrationPage } from './pages/registration/registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage,
  },
  {
    path: 'enter-your-code',
    component: EnterYourCodePage
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
