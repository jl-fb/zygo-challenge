# Quasar App (zygo-challenge)

This is a app to simulate a Todo list.
<br>
<br>

# Technologies

- Vue
- Quasar
- Vuex
- HTML 5
- CSS 3
- Sass
- Javascript ES6+
- Processamento assíncrono com HTTP

# Run

First, clone the project

```bash
git clone https://github.com/jl-fb/zygo-challenge.git
```

```bash
cd zygo-challenge
```

To run this project you'll need to have [docker](https://docs.docker.com/get-docker/) installed.

First build the project:

```bash
$ docker build -t --[my-app-name] .
```

Then run the image:<br>

```bash
$ docker run -d --name [my-app-name] [my-app-name]
```

Then you can access the localhost:[host-port] and use the project.
<br>
<br>

To run the build version you can run:

```bash
docker exec -it zygo-challenge /bin/sh
```

```bash
cd dist/pwa && quasar serve . --https
```

<br>
<br>
# Another way

First, clone the project

```bash
git clone https://github.com/jl-fb/zygo-challenge.git
```

```bash
cd zygo-challenge
```

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev -m pwa
```

### Build the app for production

```bash
quasar build -m pwa
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

<br/>
<br/>

# PWA

The app is a PWA wich can be installed in you desktop or smartphone.

<br/>
<br/>

# Choises

Quasar was chosen because it makes ease to create application with one single code base for many plataforms, besides PWA, SSR etc. Also, Quasar increase development speed for having many components out of the box.<br/>
Typescript was used at the beginning, but I had a compatibility issue on the second day of development and decided to put TS aside. It's a small project and I didn't have much time to spend on the setup. Tailwind is the first choice for styling the application, but... same problem.
