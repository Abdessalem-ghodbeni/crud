import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { nextTick } from 'process';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  freshnessList = ["gratuit event", "event payé", "event from university"];
  EventForm!: FormGroup;
  actionBtn: string = "save"
  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.EventForm = this.formBuilder.group({
      eventname: ['', Validators.required],
      categorie: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      place: ['', Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "update";
      this.EventForm.controls['eventname'].setValue(this.editData.eventname);
      this.EventForm.controls['categorie'].setValue(this.editData.categorie);
      this.EventForm.controls['freshness'].setValue(this.editData.freshness);
      this.EventForm.controls['price'].setValue(this.editData.price);
      this.EventForm.controls['date'].setValue(this.editData.date);
      this.EventForm.controls['place'].setValue(this.editData.place);

    }

  }
  addEvent() {
    if (!this.editData) {
      console.log(this.EventForm.value)
      if (this.EventForm.valid) {
        this.api.PostEvent(this.EventForm.value).subscribe({
          next: (res) => {
            alert("event added successfully");
            this.EventForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("error while adding the event")
          }
        })
      }
    } else {
      this.updateEvent()
    }

  }
  updateEvent() {
    this.api.putEvent(this.EventForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("event update susccessfully");
          this.EventForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("error while updating the record !!!");
        }
      })
  }
}
