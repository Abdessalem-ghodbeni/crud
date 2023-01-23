import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-liste-ofuser',
  templateUrl: './liste-ofuser.component.html',
  styleUrls: ['./liste-ofuser.component.scss']
})
export class ListeOfuserComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'class', 'university', 'email', 'country', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.api.getUser().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error: (err) => {
        alert("error while fetching the records!!!")
      }

    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  deleteduser(id: number) {
    this.api.deletUser(id).subscribe({
      next: (res) => {
        alert("user deleted");
        this.getAllUser();
      },
      error: () => {
        alert("mal passeé");
      }
    })
  }



}
