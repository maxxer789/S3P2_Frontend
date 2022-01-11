import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../GroupService/group.service';
import { Group } from '../Models/IGroup';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {

  group = <Group>{};

  constructor(private groupService: GroupService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.group.id = Number(this.route.snapshot.paramMap.get('id'));

    this.GetGroup();
  }

  private GetGroup(): void
  {
    this.groupService.getGroup(this.group)
    .subscribe(group => {
      this.group = group;
      if(group.id == 0)
      {
        this.router.navigate(["home"])
      }
    },err =>{
      console.log(err);
      this.router.navigate(["home"])
    })
  }

}
