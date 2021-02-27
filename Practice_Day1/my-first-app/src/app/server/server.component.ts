// export that class that uses outside to
//register component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

//export classs and nameit
//then create @component
//register it to app.module.ts
export class ServerComponent {}
