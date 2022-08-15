import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private logginService: LoggingService) { }
    
    addAccount(newAccount: { name: string, status: string }) { 
        this.accounts.push(newAccount);
        this.logginService.logStatusChange(newAccount.status);
    }
    updateStatus(updatedInfo: { id: number, status: string }) {
        this.accounts[updatedInfo.id].status = updatedInfo.status;        
        this.logginService.logStatusChange(updatedInfo.status);
    }
}