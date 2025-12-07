import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  section1 = 'PERSONAL INFORMATION:';
  name = 'IZZA BELLE LELIS';
  age = 20;
  gender = 'Female';
  dateBirth = 'March 18, 2005';
  placeBirth = 'Angeles City, Pampanga';
  contactNo = '0912 345 6789';
  address2600 = '162-I HillValley Apartment <br> Parisas Street, Camp-7, Kennon Road';

  section2 = 'EDUCATION:';
  college = 'August 2024 - present <br> Bachelor of Science in Computer Science <br> University of Baguio <br> Baguio City';
  highSchool = 'August 2018 - June 2024 <br> Senior High School - ICT Track <br> University of Baguio <br> Baguio City';
  elementary = 'June 2015 - May 2018 <br> Remnant International School <br> Baguio City <br> June 2012 - April 2015 <br> La Verdad School <br> Apalit, Pampanga <br>';

  section3 = 'AWARDS & RECOGNITION:';
  champion = 'UB Intramurals: Cheerdance Champion <br> University of Baguio Gymnasium <br> Baguio City <br> March 22, 2024 <br><br> Miss United Nations <br> Remnant International Gymnasium <br> Baguio City <br> October 24, 2018 <br><br> YMCA: Quiz Bee <br> YMCA Center <br> Baguio City <br> November 5, 2015';
  firstRunnerUp = 'UB Entrepreneurship: Booth Competition <br> University of Baguio Gymnasium <br> Baguio City <br> November 29, 2022 <br><br> UB TLE: Cooking Competition <br> University of Baguio High School <br> Baguio City <br> September 13, 2019 <br><br> SOFAD: Mini-Teacher Award <br> Remnant International School <br> Baguio City <br> March 13, 2016';
  secondRunnerUp = 'UB Intramurals: PC Assembly Competition <br> University of Baguio High School <br> Baguio City <br> March 19, 2024 <br><br> UB Intramurals: Spelling-Bee <br> University of Baguio High School <br> Baguio City <br> February 26, 2018 <br><br> English Month: Declaration Speech <br> Remnant International School <br> Baguio City <br> January 7, 2016';

  section4 = 'SKILLS & TALENTS:';
  skills = 'Basic programming Language (Java, JavaScript, C++, Python), Web Development (HTML/CSS), Graphic Design (Adobe Photoshop, Illustrator), and Video Editing (Adobe Premiere Pro, Capcut, DaVinci)';
  talents = 'Dancing, drawing, painting, archery, and horseback riding';
}
