<p align="center">
  <a href="https://plangoab.snamiki1212.vercel.app">
	<img alt="Plangoab is a online web calendar for a person going abroad." src="https://user-images.githubusercontent.com/26793088/107297947-404e2a80-6a29-11eb-92ec-cce1d5c50a6e.png">
  </a>
  <p>TODO: here demo movie</p>
  <a href="https://github.com/snamiki1212/plangoab/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License:GPLv3">
  </a>
</p>

# Plangoab

<b><a href="https://plangoab.snamiki1212.vercel.app">Plangoab</a></b> is a online web calendar for a person going abroad.

(Plangoab stands for '<b>plan</b> to <b>go ab</b>road')

## Why I created

TODO:

## Features

- Customize your schedule
- Generating a plan by your age
- TODO: Share a schedule
- TODO: Save a schedule(local or remote)

## Demo

[👉Try Now](https://plangoab.snamiki1212.vercel.app)

## Install

```zsh
$ git clone <this-repo>
$ yarn
$ yarn start #=> open http://local:3000
```

## Architecture

Here is managed [issues](https://github.com/snamiki1212/plangoab/issues/11).

### Data Object / Explain Display

![architecture-img](https://user-images.githubusercontent.com/26793088/106835692-a5320b00-664c-11eb-8fc6-6eba324c9f2c.jpg)

### Dependency Flow

<p align="center">
<img src="https://user-images.githubusercontent.com/26793088/107864305-de6a3800-6e0f-11eb-9d2f-f12a88414018.jpg" alt="dependency flow" />
</p>

```zsh
# Build dot file
$ yarn graph:dot

# Build svg file from dot file
$ brwe install graphviz # prerequirements
$ yarn graph:svg
```

TODO: inplement in CI and automatically save this doc in /doc dir

### Development Principles

- No Class, but Function
- Atomic Design
- Prefer explainable code

### Tech Stack

- App
  - React
  - Redux (Redux Toolkit)
  - FullCalendar
  - [CSS] styled-components
  - [UI] Material-UI
  - [form] React-Hook-Form
- CI/CD
  - Github Actions
  - GitHub Pages

## Contribution

TODO:

## Licence

[GPL-3.0](https://github.com/snamiki1212/plangoab/blob/master/LICENSE.md)

Because of using [Fullcalendar Premium open-source project license](https://fullcalendar.io/license) as GPL-3.0. That makes a plangoab's license a same license.

## Sponser

TODO:

## Author

[GitHub: snamiki1212](https://github.com/snamiki1212)
