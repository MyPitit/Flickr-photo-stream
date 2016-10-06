# Flickr Photo Stream

## About
My task is to consume the public [Flickr API](https://api.flickr.com/services/feeds/photos_public.gne?format=json) and display the results according to this wireframe:

![wireframe](https://cloud.githubusercontent.com/assets/2573931/19109725/8969583a-8aee-11e6-8fda-593dc38b03c9.png)

## How to run this app
+ Clone this repo:
```
git clone git@github.com:MyPitit/Flickr-photo-stream.git
```

+ Once you have cloned this repo, in your terminal run:
```
$ npm start
```
This will start the development server.

+ If you wish to bundle the app into static files for production:
```
$ npm run build
```

+ To run the tests:
```
$ npm run tests
```
This will start the test runner.

## Technologies used
+ [React](https://facebook.github.io/react/)
+ I used the following [boilerplate](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) from ```Facebook```
+ [Babel](https://babeljs.io/)
+ [ESLint](http://eslint.org/)
+ [Webpack](https://webpack.github.io/)
+ [Node](https://nodejs.org/)
+ [SASS](http://sass-lang.com/)

### Features:
+ Single page App.
+ ```HTML``` and ```CSS``` (using pre-compilers such as ```Sass``` or ```LESS```).
+ This app support the major browsers (```Chrome```, ```Firefox```, ```Safari```, ```IE10+```).
+ Use of React framework to speed up development time.

### Stretch goals
+ Use other ```Flickr API```, that might require an ```API key```.
+ Improve the speed of the page un terms of the images/content loading.
+ Infinite scroll (loading in more images as you scroll).
+ search functionality based on tags, or the title of the photo.
+ Other possible features.
