import { Component } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/service/shared/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private aboutService: AboutService) {}

  about!: About;

  ngOnInit() {
    this.getAboutContent();
    console.log(this.about);
  }

  getAboutContent() {
    this.aboutService.getAboutContent().subscribe((res) => {
      this.about = res.data[0];
    });
  }
}
