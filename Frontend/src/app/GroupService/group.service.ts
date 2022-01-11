import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../Models/IGroup';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  constructor(private http: HttpClient) { }
  
  private groupUrl = environment.groupUrl;

  public getGroup(group: Group): Observable<Group>
  {
    return this.http.get<Group>(this.groupUrl + group.id);
  }

  public createGroup(group:Group): Observable<Group>
  {
    return this.http.post<Group>(this.groupUrl, group);
  }

  public editGroup(group:Group): Observable<Group>
  {
    return this.http.put<Group>(this.groupUrl + group.id, group);
  }

  public deleteGroup(group:Group): Observable<any>
  {
    return this.http.delete<any>(this.groupUrl + group.id);
  }
}
