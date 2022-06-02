import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'barreirense',
    loadChildren: () => import('./barreirense/barreirense.module').then( m => m.BarreirensePageModule)
  },
  {
    path: 'moinhos',
    loadChildren: () => import('./moinhos/moinhos.module').then( m => m.MoinhosPageModule)
  },
  {
    path: 'auditorio-augusto-cabrita',
    loadChildren: () => import('./auditorio-augusto-cabrita/auditorio-augusto-cabrita.module').then( m => m.AuditorioAugustoCabritaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
