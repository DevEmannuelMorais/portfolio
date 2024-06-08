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
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto 1',
      title: "Projetos em construção",
      width: "100",
      height: "51",
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      link: [
        {
        name: 'Conheça o Blog',
        url: 'https://vfull.com.br/',
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
