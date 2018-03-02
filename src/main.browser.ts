/*
 * Angular bootstraping
 *
 * Bootstrap Angular app with a top level NgModule
 */
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { decorateModuleRef } from "./boot/debug";
import { BootModule } from "./boot/boot.module";

console.log("ENV: " + ENV);

platformBrowserDynamic().bootstrapModule(BootModule).then(decorateModuleRef).catch(err => console.error(err));