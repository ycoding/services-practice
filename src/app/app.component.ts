import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountService } from './accunts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
