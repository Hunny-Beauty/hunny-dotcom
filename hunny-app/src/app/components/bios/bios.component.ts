import { Component } from '@angular/core';
import { TeamMember, HUNNY } from './hunnys';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
    styleUrls: ['./bios.component.scss']
})
export class BiosComponent {
  title = 'bios';

  public members: TeamMember[] = HUNNY;

}
