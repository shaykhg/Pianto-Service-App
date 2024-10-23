import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth-guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'payout-method',
    loadChildren: () => import('./payout-method/payout-method.module').then( m => m.PayoutMethodPageModule)
  },
  {
    canActivate: [AuthGuard],
      path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'earning-popup',
    loadChildren: () => import('./modals/earning-popup/earning-popup.module').then( m => m.EarningPopupPageModule)
  },
  {
    path: 'review-popup',
    loadChildren: () => import('./modals/review-popup/review-popup.module').then( m => m.ReviewPopupPageModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'completion/:id',
    loadChildren: () => import('./completion/completion.module').then( m => m.CompletionPageModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'add-time-sheet',
    loadChildren: () => import('./modals/add-time-sheet/add-time-sheet.module').then( m => m.AddTimeSheetPageModule)
  },
  {
    path: 'details-sheet',
    loadChildren: () => import('./modals/details-sheet/details-sheet.module').then( m => m.DetailsSheetPageModule)
  },
  {
    path: 'review-sheet',
    loadChildren: () => import('./modals/review-sheet/review-sheet.module').then( m => m.ReviewSheetPageModule)
  },
  {
    path: 'earning-sheet',
    loadChildren: () => import('./modals/earning-sheet/earning-sheet.module').then( m => m.EarningSheetPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
