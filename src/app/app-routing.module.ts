import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { UploadComponent } from './features/upload/upload.component';
import { ImagedetailsComponent } from './features/upload/imagedetails/imagedetails.component';
import { PhotostreamComponent } from './features/photostream/photostream.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'photostream', component: PhotostreamComponent},
  { path: 'upload', component: UploadComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routingAllComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  PhotostreamComponent,
  UploadComponent,
  ImagedetailsComponent
];

