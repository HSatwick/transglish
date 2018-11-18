import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListOfTranslationsComponent } from './list-of-translations/list-of-translations.component';
import { SentenceTranslateDetailComponent } from './sentence-translate-detail/sentence-translate-detail.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'new-sentence', component: SentenceFormComponent},
  { path: 'list-of-sentences', component: ListOfTranslationsComponent},
  { path: 'detail-sentence/:id', component: SentenceTranslateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
