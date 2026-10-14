import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
  async ngAfterViewInit(): Promise<void> {
    const scripts = [
      'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'assets/vendor/aos/aos.js',
      'assets/vendor/typed.js/typed.umd.js',
      'assets/vendor/purecounter/purecounter_vanilla.js',
      'assets/vendor/waypoints/noframework.waypoints.js',
      'assets/vendor/glightbox/js/glightbox.min.js',
      'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      'assets/vendor/isotope-layout/isotope.pkgd.min.js',
      'assets/vendor/swiper/swiper-bundle.min.js',
      'assets/js/main.js'
    ];

    for (const source of scripts) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = new URL(source, document.baseURI).href;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`No se pudo cargar ${source}`));
        document.body.appendChild(script);
      });
    }
  }
}