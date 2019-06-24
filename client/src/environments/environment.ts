// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost/server/',
  //apiUrl: 'http://localhost/proyectos/sae/server/'
  firebase:{
    apiKey: "AIzaSyAEnGCT9CTj6af9436tBi0dnpDhW1a6IjQ",
    authDomain: "chat3-f6358.firebaseapp.com",
    databaseURL: "https://chat3-f6358.firebaseio.com",
    projectId: "chat3-f6358",
    storageBucket: "chat3-f6358.appspot.com",
    messagingSenderId: "169759824186"
  }
};
