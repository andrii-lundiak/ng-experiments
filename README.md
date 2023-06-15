# ng-experiments

Experiments with Angular boilerplate code setup for v14 and v15 mainly for research @Injectable() issues.

Setup of boilerplate code:

Info:

https://angular.io/tutorial/tour-of-heroes/toh-pt0

Example:

https://angular.io/generated/live-examples/toh-pt0/stackblitz.html

In short:
- `npm install @angular/cli@16 --global`
- `ng new my-new-project` (eg. `ng new ng16`)
- If Routing was NOT configured during `ng new` then `ng generate module app-routing --flat --module=app`
- `ng generate component details`
- `ng generate service hero`
- If Angular MDC needed => https://material.angular.io/guide/getting-started => `ng add @angular/material` plus a few code changes.
- `ng add @angular-eslint/schematics` or use dedicated version.


Rather don't use `latest` or `next` as version value, because you can end up in versions mismatch later during `npm i` or `npm ci`. But If you really want to rely on the VERY latest aka nightly builds version then use `next`:
 - `npm install @angular/cli@next --global`
 - `ng add @angular/material@next` (but it can fail, because Angular Material versioning is alwaysing behind Angular)
 - `ng add @angular-eslint/schematics@next` (same situation with versioning)
