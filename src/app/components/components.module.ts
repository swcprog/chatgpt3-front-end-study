import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { BrandComponent } from './brand/brand.component';
import { CTAComponent } from './cta/cta.component';
import { FeatureComponent } from './feature/feature.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticleComponent,
    BrandComponent,
    CTAComponent,
    FeatureComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ArticleComponent,
    BrandComponent,
    CTAComponent,
    FeatureComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
