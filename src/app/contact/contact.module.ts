import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './components/social/social.component';
import { FrequentQuestionComponent } from './components/frequent-question/frequent-question.component'
import { ContactRoutingModule } from './contact-rounting.module'


@NgModule({
  declarations: [
    ContactComponent,
    SocialComponent,
    FrequentQuestionComponent
  ],
  imports: [
    ContactRoutingModule,
    CommonModule
  ]
})
export class ContactModule { }
