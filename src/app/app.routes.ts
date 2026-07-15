import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotes } from './legal-notes/legal-notes';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'legal-notes', component: LegalNotes },
    { path: 'privacy-policy', component: PrivacyPolicy },
];
