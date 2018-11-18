import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './materials.module';
import { ListOfTranslationsComponent } from './list-of-translations/list-of-translations.component';
import { GetListService } from './list-of-translations/get-list.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateSentenceService } from './sentence-form/translate-sentence.service';
import { SentenceTranslateDetailComponent } from './sentence-translate-detail/sentence-translate-detail.component';
import { WordTruncate } from './pipes/WordTruncate';

@NgModule({
  declarations: [
    AppComponent,
    SentenceFormComponent,
    NavBarComponent,
    ListOfTranslationsComponent,
    SentenceTranslateDetailComponent,
    WordTruncate
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    GetListService,
    TranslateSentenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
