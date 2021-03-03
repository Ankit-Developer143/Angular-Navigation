import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { PushAndSpliceComponent } from './push-and-splice/push-and-splice.component';

@NgModule({
  declarations: [AppComponent, SwitchCaseComponent, PushAndSpliceComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
