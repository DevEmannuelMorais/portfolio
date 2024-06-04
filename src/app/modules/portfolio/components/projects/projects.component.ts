import {Component, inject, signal} from '@angular/core';
import {IProjects} from "../../interface/IProjects.interface";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogProjectsComponent} from "../dialog/dialog-projects/dialog-projects.component";

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
      description: "Descrição do projeto 1",
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
      panelClass: 'dialog-projects',
    });
  }



}
