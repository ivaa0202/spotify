import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {

  playlists: boolean = false;

  showPlaylists(): void {
    this.playlists = !this.playlists;
  }

}
