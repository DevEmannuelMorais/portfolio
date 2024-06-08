import {Component, Inject, OnInit, signal} from '@angular/core';
import {IProjects} from "../../../interface/IProjects.interface";
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    private dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {
  }

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
   return  this.dialogRef.close();
  }


}
