import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {

  playlistsVisible: boolean = false;

  playlists: boolean = false;

  showPlaylists(): void {
    this.playlists = !this.playlists;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const showHiddenLink = this.elementRef.nativeElement.querySelector('#showHidden');

    if (showHiddenLink) {
      showHiddenLink.addEventListener('click', () => this.togglePlaylistsVisibility());
    }
  }

  togglePlaylistsVisibility(): void {
    const hiddenDivs = this.elementRef.nativeElement.querySelectorAll('.hidden');
    this.playlistsVisible = !this.playlistsVisible;

    hiddenDivs.forEach((div: HTMLDivElement) => {
      if (this.playlistsVisible) {
        this.renderer.setStyle(div, 'display', 'block');
      } else {
        this.renderer.setStyle(div, 'display', 'none');
      }
    });
  }

}

