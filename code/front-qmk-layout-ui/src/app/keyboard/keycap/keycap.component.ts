import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-keycap',
  templateUrl: './keycap.component.html',
  styleUrls: ['./keycap.component.css']
})
export class KeycapComponent {
  private isDragging = false;
  private offsetX: number = 0;
  private offsetY: number = 0;

  onMouseDown(event: MouseEvent) {
    event.preventDefault(); // Prevent text selection
    this.isDragging = true;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
    console.log(`Mouse down at offset (${this.offsetX}, ${this.offsetY})`);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      let x = event.clientX - this.offsetX;
      let y = event.clientY - this.offsetY;
      const element = event.target as HTMLElement;

      // Obtener dimensiones del elemento
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;

      // Limitar dentro del viewport
      const minX = 0;
      const minY = 0;
      const maxX = window.innerWidth - elementWidth;
      const maxY = window.innerHeight - elementHeight;

      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      console.log(`Mouse move at position (${x}, ${y})`);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      console.log('Mouse up, drag ended');
    }
  }
}
