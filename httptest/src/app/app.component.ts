import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoDataList: Todo[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Todo[]>('assets/todo.json').subscribe(data => {
      this.todoDataList = data;
    });
  }
}
