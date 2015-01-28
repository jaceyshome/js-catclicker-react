systemjs-es6-react-boilerplate
=========
A sample app in es6 making use of systemjs, react, jspm.

To run:

```bash
npm install
jspm install
npm start
```

To run with docker:

```bash
docker build -t systemjs-es6-react-boilerplate .
docker run -d -p 80:80 --name test systemjs-es6-react-boilerplate
open http://$(boot2docker ip) #OSX
# open http://127.0.0.1 #Linux
```
