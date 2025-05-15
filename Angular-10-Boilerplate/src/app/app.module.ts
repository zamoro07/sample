import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services and Interceptors
import { JwtInterceptor, ErrorInterceptor, appInitializer, fakeBackendProvider } from './_helpers';
import { AccountService } from './_services';

// Root Components
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

// Admin Feature Components (ONLY if not lazy-loaded)
import { ListComponent as EmployeeList } from './employees/list.component';
import { ListComponent as DepartmentList } from './departments/list.component';
import { ListComponent as RequestList } from './requests/list.component';
import { ListComponent as WorkflowList } from './workflows/list.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    EmployeeList,
    DepartmentList,
    RequestList,
    WorkflowList
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
