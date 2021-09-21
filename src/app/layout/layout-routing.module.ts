import { AuthGuard } from './../guards/auth.guard';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomeModule) },
      { path: 'create', loadChildren: () => import('../create/create.module').then( m => m.CreateModule) },
      { path: 'query', loadChildren: () => import('../query/query.module').then( m => m.QueryModule) },
      { path: 'analyze', loadChildren: () => import('../analyze/analyze.module').then( m => m.AnalyzeModule) },
      { path: 'settings', loadChildren: () => import('../settings/settings.module').then( m => m.SettingsModule) }
    ], canActivate: [AuthGuard]},
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ]
  })
export class LayoutRoutingModule {}