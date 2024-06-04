import {Component, signal} from '@angular/core';
import {IExperiences} from "../../interface/IExperiences.interface";



@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Full-Stack Developer",
        p: "DETRAN - CE | Ago 2023 - Present",
      },
      text: "<p> Desde de agosto de 2023, atuo como Analista de Sistemas no DETRAN-CE, destacando-me nas áreas Back-end, com Java(Spring Boot, Java EE) e Ruby on Rails, e Front-end, utilizando Html5, Css3, Javascript, Jsp, Bootstrap, Semantic UI.</p> <p>Além disso, minha experiência abrange gerenciamento de bancos de dados PostgresSQL, Utilização de Ferramentas de Relatórios(IReport e Pentaho), versionamento de código e integração contínua com GitLab e SVN. </p>"
    }
  ]);
}
