import {Component, inject, signal} from '@angular/core';
import {IProjects} from "../../interface/IProjects.interface";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogProjectsComponent} from "../dialog/dialog-projects/dialog-projects.component";
import {EDialogPanelClass} from "../../enum/EDialogPanelClass.enum";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]> ([
    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Portfolio em Angular',
      title: "Projeto Portfolio que você está vendo agora!",
      width: "100",
      height: "51",
      description:
      '<p>Bem-vindo ao meu portfólio! Aqui você encontrará uma coleção dos meus projetos e realizações no fascinante mundo do desenvolvimento web.</p>\n' +
        '<p>Com foco em Angular, Front-end, JavaScript, Node.js e TypeScript, meus trabalhos refletem minha paixão por criar interfaces modernas e eficientes. Explore meus projetos para ver como aplico conceitos avançados e práticas recomendadas em desenvolvimento web, tanto no front-end quanto no back-end.</p>\n' +
        '<p>Se você está procurando por inovação, criatividade e habilidade técnica, você está no lugar certo. Mergulhe em meu portfólio e descubra como posso ajudar a transformar suas ideias em realidade.</p>\n',
      link: [
        {
        name: 'Conheça o GitHub do projeto',
        url: 'https://github.com/DevEmannuelMorais/portfolio',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }



}
