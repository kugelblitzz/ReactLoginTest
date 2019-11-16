# ReactLoginTest
Test React Login Project For Docker Builds

When Running for the first time the app needs its liblaries/dependencies installed

to install dependencies goto project folder and do 

```npm i```

*you will recieve warnning , please ignore them*

this will install dependencies for the server side.

then dependencies for the client side needs to be installed next

so cd into client folder and do 

```npm i```
*you will recieve warnning , please ignore them*

now all dependencies are installed.

The application now needs to be built for the first time in order to do so

you need to run this command in the client directory 

```npm run-script build```

this will create a folder called **build** inside the client directory (I have gitignored the build folder)

once the build is complete , navigate back to the inital project folder and do,

```node server.js```

username : aruna 
password : 123
