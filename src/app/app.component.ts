import { Component, Inject } from '@angular/core';
import { TOKEN } from './other.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(TOKEN) public values: string[]) {}
}
