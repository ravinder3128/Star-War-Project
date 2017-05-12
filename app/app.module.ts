import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, PlanetService, OrderByPipe } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        OrderByPipe
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PlanetService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }