import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectGofilesComponent } from './components/project-gofiles/project-gofiles.component';
import { ProjectR2Component } from './components/project-r2/project-r2.component';
import { ProjectIcewaterComponent } from './components/project-icewater/project-icewater.component';
import { ProjectLeafdropComponent } from './components/project-leafdrop/project-leafdrop.component';
import { ProjectUsedcarComponent } from './components/project-usedcar/project-usedcar.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home/:linkID', component: HomeComponent},
  {path: 'r2', component: ProjectR2Component},
  {path: 'gofiles', component: ProjectGofilesComponent},
  {path: 'icewater', component: ProjectIcewaterComponent},
  {path: 'leafdrop', component: ProjectLeafdropComponent},
  {path: 'usedcar', component: ProjectUsedcarComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {  
      enableTracing: true,
      anchorScrolling: 'enabled'
     }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
