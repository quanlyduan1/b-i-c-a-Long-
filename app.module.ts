import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { HomeTravelComponent } from './home-travel/home-travel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutTravelComponent } from './about-travel/about-travel.component';
import { CmtTravelComponent } from './cmt-travel/cmt-travel.component';
import { DetailsTravelComponent } from './details-travel/details-travel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UploadAccountComponent } from './upload-account/upload-account.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        NgxPaginationModule,
        NgbCarouselModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent, HomeTravelComponent, AboutTravelComponent, CmtTravelComponent, DetailsTravelComponent, LoginComponent,SignupComponent, UploadAccountComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
