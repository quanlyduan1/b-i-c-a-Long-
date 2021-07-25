import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { BlogUploadComponent } from './blog-upload/blog-upload.component';
import { BlogViewIdComponent } from './blog-view-id/blog-view-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { UserComponent } from './user/user.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { DataTablesModule } from 'angular-datatables';
import { CommentComponent } from './comment/comment.component';
import { ComponentComponent } from '../component/component.component';

@NgModule({
    imports: [
        CommonModule, 
        LayoutRoutingModule, 
        TranslateModule, 
        NgbDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent, 
        BlogTableComponent, 
        BlogUploadComponent, 
        BlogViewIdComponent, 
        BlogCreateComponent, 
        UserComponent, 
        UserUploadComponent, 
        CommentComponent,
    ]
})
export class LayoutModule {}
