<p align="center">
  <a href="https://plangoab.snamiki1212.vercel.app">
	  <img alt="Plangoab is a online web calendar for a person going abroad." src="https://user-images.githubusercontent.com/26793088/107297947-404e2a80-6a29-11eb-92ec-cce1d5c50a6e.png">
  </a>
  <a href="https://github.com/snamiki1212/plangoab/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License:GPLv3" align="center">
  </a>
</p>

# Plangoab

<b><a href="https://plangoab.snamiki1212.vercel.app">Plangoab</a></b> is a online web calendar for a person going abroad.

(Plangoab stands for '<b>plan</b> to <b>go ab</b>road')

## Features

- 📝 Customize your schedule
- ⚙️ Generate plans with many options
- 💁‍♂️ Share a schedule(TODO: Up comming)
- 💻 Save plans on local automatically

## Demo

<table align="center">
  <tr align="center">
    <td>
      <p>Customizable</p>
      <a href="https://plangoab.snamiki1212.vercel.app">
        <img
        src="https://user-images.githubusercontent.com/26793088/109248982-b37ecd00-779b-11eb-835a-21ba4d9e9e92.gif"
        alt="customize-plans">
      </a>
    </td>
    <td>
      <p>Generate Plan</p>
      <a href="https://plangoab.snamiki1212.vercel.app">
        <img src="https://user-images.githubusercontent.com/26793088/109247952-b8428180-7799-11eb-906f-44156c01746c.gif"
        alt="example-generating-plans">
      </a>
    </td>
  </tr>
</table>

[👉Try Now](https://plangoab.snamiki1212.vercel.app)

## Why I create

Because I have wanted this app when I make a plan to go to Canada and then to find jobs.

If you want to go abroad to find jobs, you should think about many topics when you make plans.

- When is the deadline to go to Canada with Working Holiday Visa?
- How long can/should you stay in Canada?
- Some schools have different start and term period.
- etc...

Actually, in my case, I handwrote some plans but I made some mistakes to calculate a Visa and my ages. Fortunatelly, I realized it but I almost ruined my career. (Sorry, handwrite is Japanese!)

|                                                                                                                                                |                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="handwriting-screenshot" src="https://user-images.githubusercontent.com/26793088/109250828-33f2fd00-779f-11eb-8bb8-0bb8fedd0787.png"> | <img alt="handwrite" src="https://user-images.githubusercontent.com/26793088/109252814-44a57200-77a3-11eb-99c0-94c3ccfc8f9a.png"> |

I believe this app would help people who want to plan to go abroad, especially to find job seriously.

I pursued to design this app about data models and workflow that has the capability of handling for people who are from all countries and who want to go all countries.

## Architecture

Here is managed [issues](https://github.com/snamiki1212/plangoab/issues/11).

### Data Object / Explain Display

<img align="center" src="https://user-images.githubusercontent.com/26793088/106835692-a5320b00-664c-11eb-8fc6-6eba324c9f2c.jpg" alt="architecture-img">

### Dependency Flow

<p align="center">
<img src="https://user-images.githubusercontent.com/26793088/107864305-de6a3800-6e0f-11eb-9d2f-f12a88414018.jpg" alt="dependency flow" />
</p>

- Redux feature must call through custom hooks

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
- Never use `this` and `prototype`
- Use function component with general define syntax because of nameful // TODO: create eslint rule

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

### Color Pallete

TODO:

## Install

```zsh
$ git clone <this-repo>
$ yarn
$ yarn start #=> open http://local:3000
```

## Contribution

TODO:

## Licence

[GPL-3.0](https://github.com/snamiki1212/plangoab/blob/master/LICENSE.md)

Because of using [Fullcalendar Premium open-source project license](https://fullcalendar.io/license) as GPL-3.0. That makes a plangoab's license a same license.

## Sponser

TODO:

## Author

[GitHub: snamiki1212](https://github.com/snamiki1212)
