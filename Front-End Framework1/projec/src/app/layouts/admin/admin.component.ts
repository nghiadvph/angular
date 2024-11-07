import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderadminComponent } from '../../component/headeradmin/headeradmin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderadminComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
}
