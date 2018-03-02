import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { CrashComponent } from "./components/crash.component";
import { BootComponent } from "./boot.component";
import { PageNotFoundComponent } from "./components/pagenotfound.component";
import { UnauthorizedComponent } from "./components/unauthorized.component";
import { routing } from "./boot.routing";
import { EnvironmentService } from "./context/environment.service";
import { HttpModule } from "@angular/http";

//////////////////////////////
// Module bootstrap
//////////////////////////////

@NgModule({
  imports: [
    
    BrowserModule,
    routing,
    HttpClientModule
  ],
  declarations: [
    CrashComponent,
    BootComponent,
    PageNotFoundComponent,
    UnauthorizedComponent
  ],
  providers: [
    EnvironmentService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: EnvironmentService) => () => config.load(),
      deps: [EnvironmentService],
      multi: true
    },
  ],
  bootstrap: [BootComponent]
})
export class BootModule {

}
