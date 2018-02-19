React-Base
==========
Basic react and redux setup with babel, eslint, prettier, flow and webpack.

Commands
--------
+ `install`         - install all packages
+ `build`           - build project for production
+ `test` or `tdd`   - run tests
+ `typecheck`       - run flow to typecheck files
+ `lint`            - run eslint on all js, jsx and json files with fix option
+ `dev`             - run development server
+ `start`           - run development environment


Eslint explanation
------------------
To follow the **stepdown rule** (high level function at top and low level next)
in clean code (Chapter 3, One Level of Abstraction per Function ), these 2
eslint rules are disabled/redefined.
```
"no-use-before-define": 0,
"react/sort-comp": [2, {
    "order": [
        "static-methods",
        "lifecycle",
        "render",
        "everything-else"
    ]
]}]
```
