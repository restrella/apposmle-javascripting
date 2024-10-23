// import muyDefault, { name as newName} from "./index.js";
import * as authService from "./index.js";

// console.log(`${newName} from another file`);
// console.log(`default ${muyDefault} from another file`);

function login() {
  //
  console.log("some tasks");

  //
  authService.login();
}

authService.register();
login();
authService.logout();
