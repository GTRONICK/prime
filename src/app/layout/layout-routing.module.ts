import { AuthGuard } from './../guards/auth.guard';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('../modules/home/home.module').then( m => m.HomeModule) , data: {animation: 'Home'}},
      { path: 'create', loadChildren: () => import('../modules/create/create.module').then( m => m.CreateModule), data: {animation: 'Create'} },
      { path: 'query', loadChildren: () => import('../modules/query/query.module').then( m => m.QueryModule) },
      { path: 'analyze', loadChildren: () => import('../modules/analyze/analyze.module').then( m => m.AnalyzeModule) },
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