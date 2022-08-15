import { Component, Input } from '@angular/core';
import { AccountService } from '../accunts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;  
  constructor(private loggingService: LoggingService, private accountService:AccountService ) { }


  onSetTo(status: string) {    
    this.accountService.updateStatus({ id: this.id, status: status });
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
