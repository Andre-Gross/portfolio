import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotes } from './legal-notes/legal-notes';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'legal-notes', component: LegalNotes },

];
