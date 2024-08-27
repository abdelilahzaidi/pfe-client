import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ResponsableComponent } from './pages/responsable/responsable.component';
import { MemberComponent } from './pages/member/member.component';
import { MemberModule } from '../../pfe-client/src/app/modules/member/member.module';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'responsable',component:ResponsableComponent},
  {path:'member',component:MemberComponent},
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((a) => a.AdminModule),
  },
  {
    path:'member',
    loadChildren:()=>
      import('./modules/member/member.module').then((m)=> m.MemberModule)
  },
  {
    path:'responsable',
    loadChildren:()=>
      import('./modules/responsable/responsable.module').then((r)=>r.ResponsableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
