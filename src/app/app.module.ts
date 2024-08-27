import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighbarComponent } from './components/highbar/highbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MemberComponent } from './pages/member/member.component';
import { ResponsableComponent } from './pages/responsable/responsable.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HighbarComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TeamComponent,
    AdminComponent,
    MemberComponent,
    ResponsableComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
