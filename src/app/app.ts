import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { invoke } from '@tauri-apps/api/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected name = '';
  protected message = '';

  protected async greet(event: Event): Promise<void> {
    event.preventDefault();
    this.message = await invoke('greet', { name: this.name });
  }
}
