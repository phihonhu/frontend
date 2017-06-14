# PEAX3 Portal
This project is based on the [ngx-starter-kit](https://github.com/ngx-rocket/starter-kit) and uses the `pixie` library and the angular-internal i18n native angular translation tool.

# Setup
1. `npm install`

# Development
This project supports code generation with the [angular-cli](https://github.com/angular/angular-cli) and recommends using this generator when adding new code to the project.

```
# If angular-cli is installed globally
ng g [component|directive|pipe|service|class|guard|interface|enum|module] new-item-name

# If only installed in this project
npm run generate [component|directive|pipe|service|class|guard|interface|enum|module] new-item-name
```

# Run
1. `npm run start-en`
2. open browser and navigate to: http://localhost:4200
3. Login with Username: `username` Password: `password`

# Update `pixie` library
1. push your changes to a certain branch on git
2. `npm run update-pixie`
3. depending on which branch of `pixie` you are using, in the `package.json` of the base project, you have to change:

```
"pixie": "git+ssh://git@gitlab.peaxlabs.ch:frontend/pixie",
```

to

```
"pixie": "git+ssh://git@gitlab.peaxlabs.ch:frontend/pixie#my_branch_name",
```

# How to make a section to lazy load (load on demand)
E.g. for section "archive"
1. In file: `app-routing.module.ts` add a `loadChildren` entry:

```
  {
    path: 'archive',
    loadChildren: './sections/archive/archive.module#ArchiveModule'
  }
```

2. In the routing file of the module: `archive-routing.module.ts` make sure that the default route `''` exists:

```
{ path: '', component: ArchiveComponent, data: { title: 'Archive' } }
```

3. In `app.module.ts` make sure that you **do not** import the lazy loaded modules.

4. You can test if lazy loading works in the chrome developer tools. When you enter the lazy loaded module, you should see that a new "chunk" is being loaded through the network.

# Routing
Routing is being handled in the main routing file: `app-routing.module.ts` (For the lazy loading paths), and in each section module itself: e.g. `archive-routing.module.ts` for the specific section routes. HTML5 routes are being used (no `#` in the url). To support these routes, the server needs to redirect all "404 not found" routes to the app root.

# Translations (i18n)
The Angular4 internal translations module is used for translations. To keep the keys from being changed all the times we use the technical-id as the key (e.g. `sections.archive`) and use that in the templates (e.g. `<span i18n>sections.archive</span>`).

To extract all keys and fill them into the different language files, we use command:

```
npm run i18n-extract
```