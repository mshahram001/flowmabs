import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//Import components
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent , LoginDialogComponent, MyCartDialogComponent} from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent, MyCartDialogComponent, LoginDialogComponent, HomeComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
