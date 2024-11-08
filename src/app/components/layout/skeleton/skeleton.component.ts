import { Component, signal, WritableSignal } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  limit:WritableSignal<number[]> = signal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
}
