import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { BlogUploadComponent } from './blog-upload/blog-upload.component';
import { BlogViewIdComponent } from './blog-view-id/blog-view-id.component';
import { CommentComponent } from './comment/comment.component';
import { LayoutComponent } from './layout.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path:'tables',component:BlogTableComponent},
            {path:'blogupload/:id',component:BlogUploadComponent},
            {path:'blogview/:id',component:BlogViewIdComponent},
            {path:'blogcreate',component:BlogCreateComponent},
            // {path:'dashboard',component:DashboardComponent},
            {path:'userupload/:id',component:UserUploadComponent},
            {path:'user',component:UserComponent},
            {path:'cmt',component:CommentComponent},
            {path:'component',component:CommentComponent},
            { path: '', redirectTo: 'dashboard'},
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
