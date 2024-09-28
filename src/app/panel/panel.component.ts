import { Component, Input } from '@angular/core';
import { Exercise } from '../header/users/user.model';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Input({required:true}) exercise:Exercise|undefined;
  
}
