import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface SlideImage {
  id: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-farbpalette',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './farbpalette.component.html',
  styleUrls: ['./farbpalette.component.scss']
})
export class FarbpaletteComponent implements OnInit, OnDestroy {
  images: SlideImage[] = [
    { id: '1', url: 'https://ultimateguard.com/thumbnail/4b/e0/51/1751519288/3D_UGD011616_0001_solo_400x400.webp', title: 'Blau Classic' },
    { id: '2', url: 'https://ultimateguard.com/thumbnail/85/fa/eb/1751519352/3D_UGD011619_0001_solo_400x400.webp', title: 'Rot Metallic' },
    { id: '3', url: 'https://ultimateguard.com/thumbnail/59/c4/ab/1751519332/3D_UGD011618_0001_solo_400x400.webp', title: 'Grün Forest' },
    { id: '4', url: 'https://ultimateguard.com/thumbnail/26/a4/27/1751519309/3D_UGD011617_0001_solo_400x400.webp', title: 'Schwarz Premium' },
    { id: '5', url: 'https://ultimateguard.com/thumbnail/1c/3e/85/1753429620/UGD011639_0001_400x400.webp', title: 'Weiß Pearl' },
    { id: '6', url: 'https://ultimateguard.com/thumbnail/51/fa/2a/1753429664/UGD011641_0001_400x400.webp', title: 'Lila Mystic' },
    { id: '7', url: 'https://ultimateguard.com/thumbnail/dc/e0/5b/1753429597/UGD011638_0001_400x400.webp', title: 'Orange Sunset' },
    { id: '8', url: 'https://ultimateguard.com/thumbnail/1d/98/b3/1753429686/UGD011642_0001_400x400.webp', title: 'Türkis Ocean' },
    { id: '9', url: 'https://ultimateguard.com/thumbnail/12/cf/05/1753429642/UGD011640_0001_400x400.webp', title: 'Pink Flamingo' },
    { id: '10', url: 'https://ultimateguard.com/thumbnail/c3/46/78/1736436771/3D_UGD011465_0001_400x400.webp', title: 'Gold Royal' }
  ];

  currentIndex = 0;
  autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  isAutoPlaying = true;
  touchStartX = 0;
  touchEndX = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
    this.isAutoPlaying = true;
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.isAutoPlaying = false;
  }

  toggleAutoPlay(): void {
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  getSlideClass(index: number): string {
    const diff = index - this.currentIndex;
    const total = this.images.length;
    const normalizedDiff = ((diff + total) % total);

    if (normalizedDiff === 0) return 'slide-center';
    if (normalizedDiff === 1 || normalizedDiff === total - (total - 1)) return 'slide-right-1';
    if (normalizedDiff === total - 1) return 'slide-left-1';
    if (normalizedDiff === 2) return 'slide-right-2';
    if (normalizedDiff === total - 2) return 'slide-left-2';
    if (normalizedDiff > 2 && normalizedDiff <= Math.floor(total / 2)) return 'slide-hidden-right';
    return 'slide-hidden-left';
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      if (this.isAutoPlaying) {
        this.stopAutoPlay();
        this.startAutoPlay();
      }
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  goToHome(): void {
    void this.router.navigate(['/']);
  }

  goToGalerie(): void {
    void this.router.navigate(['/galerie']);
  }
}
