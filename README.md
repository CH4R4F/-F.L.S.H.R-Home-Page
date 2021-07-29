# F.L.S.H.R Home Page
## Hello world
I made this front-end design for a friend's project, I used **Pure Css (*Sass*) with some Vanilla js**, this design is based on a figma design made by @Achzee
you can see the design [Here on figma](https://www.figma.com/file/rY4JGCJ2H73eCNcz2RqmGx/EDS-Website)

I used gulp while creating this website and I already add my `gulpfile.js` file and added some functions to convert scss into css code, also browserSync to open a live server and see all the changes in my browser. 
if you want to work with the same file all what you have to do is

- you should have Node instaled in your local machin, if not [install it Here](https://nodejs.org/)
- after installing Node you will have the ability to run npm commands
- open terminal and clone the repository in any place you want
```
git clone https://github.com/CH4R4F/-F.L.S.H.R-Home-Page.git
```
- then change the directory to the project folder
```
cd ./"-F.L.S.H.R-Home-Page"
```
- first install the gulp command line to be able to use gulp in our terminal
```
npm i gulp-cli g
```
- then install these packages (the --save-dev) is optional
```
npm install --save-dev browser-sync cssnano gulp gulp-postcss gulp-sass gulp-terser postcss
```
this will install all the packages in your folder so you could use the gulp file in this project

now all what you have to do to convert the scss files and get a live-server browser you only have to type `gulp` in the terminal
