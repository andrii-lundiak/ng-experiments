# ng-experiments

Experiments with Angular boilerplate code setup for v14 and v15 mainly for research @Injectable() issues.

Setup of boilerplate code:

Info:

https://angular.io/tutorial/tour-of-heroes/toh-pt0

Example:

https://angular.io/generated/live-examples/toh-pt0/stackblitz.html

In short:

- `npm install @angular/cli@latest --global` if you want to rely on latest STABLE version or `npm install @angular/cli@next --global` if you want to install development version to try.
- `ng new my-new-project` (eg. `ng new ng16`)
- If Routing was NOT configured during `ng new` then `ng generate module app-routing --flat --module=app`
- `ng generate component details`
- `ng generate service hero`
- If Angular MDC needed => https://material.angular.io/guide/getting-started => `ng add @angular/material` plus a few code changes.

