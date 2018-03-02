import { Injectable } from '@angular/core';
import {Router} from "@angular/router";


@Injectable()
export class ErrorNotifierService {

  constructor(private router: Router) {
  }

  notifyError401(error: any) {
    console.log(error);
    this.router.navigate(['/login', { msg: '401' } ]);
  }

  notifyError(error: any) {
    console.log(error);
    this.router.navigate(['/crash', { msg: error } ]);
  }

}
