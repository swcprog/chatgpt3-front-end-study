import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { PossibilityComponent } from './possibility/possibility.component';
import { FeaturesComponent } from './features/features.component';
import { WhatGPT3Component } from './what-gpt3/what-gpt3.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    BlogComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    PossibilityComponent,
    WhatGPT3Component,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    BlogComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    PossibilityComponent,
    WhatGPT3Component,
  ],
})
export class ContainersModule {}
