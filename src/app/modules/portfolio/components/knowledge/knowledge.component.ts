import {Component, signal} from '@angular/core';
import {IKnowledge} from "../../interface/knowledge.inteface";

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnoledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento de Spring Boot',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/language-ruby-on-rails.svg',
      alt: 'Ícone de conhecimento de Ruby on Rails',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de Sass',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de Css',
    },{
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de Python',
    },
  ])

}
