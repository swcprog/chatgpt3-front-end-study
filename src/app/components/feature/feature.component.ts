import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() direction!: string;
}
