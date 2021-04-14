<p align="center">
  <a href="https://plangoab.snamiki1212.vercel.app">
	  <img alt="Plangoab is a online web calendar for a person going abroad." src="https://user-images.githubusercontent.com/26793088/114226819-f7332d80-9928-11eb-93f8-4f9919018bf6.png">
  </a>
  <a href="https://github.com/snamiki1212/plangoab/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License:GPLv3" align="center">
  </a>
</p>

# Plangoab

<b><a href="https://plangoab.snamiki1212.vercel.app">Plangoab</a></b> <i>(/plˈængóʊb/)</i> is a online web calendar for a person going abroad.

(Plangoab stands for '<b>plan</b> to <b>go ab</b>road')

### Features

- 📝 Customize your schedule
- ⚙️ Generate plans with many options
- 💁‍♂️ Share a schedule(TODO: Up comming)
- 💻 Save plans on local automatically

### Demo

<table align="center">
  <tr align="center">
    <td>
      <span>📝 Customize your plan</span>
    </td>
    <td>
      <span>⚙️ Generate Plan</span>
    </td>
  </tr>
  <tr align="center">
    <td>
      <a href="https://plangoab.snamiki1212.vercel.app">
        <img
        src="https://user-images.githubusercontent.com/26793088/109248982-b37ecd00-779b-11eb-835a-21ba4d9e9e92.gif"
        alt="customize-plans">
      </a>
    </td>
    <td>
      <a href="https://plangoab.snamiki1212.vercel.app">
        <img src="https://user-images.githubusercontent.com/26793088/109247952-b8428180-7799-11eb-906f-44156c01746c.gif"
        alt="example-generating-plans">
      </a>
    </td>
  </tr>
</table>

[👉👉 Try Now](https://plangoab.snamiki1212.vercel.app)

## Why do I create

Because I have wanted this app when I make a plan to go to Canada and then to find jobs.

If you want to go abroad to find jobs, you should think about many topics when you make plans.

- When is the deadline to go to Canada with Working Holiday Visa?
- How long can/should you stay in Canada?
- Some schools have different start and term period.
- etc...

Actually, in my case, I handwrote some plans but I made some mistakes to calculate a Visa and my ages. Fortunatelly, I realized it but I almost ruined my career. (Sorry, handwrite is Japanese!)

<table>
  <tr>
    <td>
      <img alt="handwriting-screenshot" src="https://user-images.githubusercontent.com/26793088/109250828-33f2fd00-779f-11eb-8bb8-0bb8fedd0787.png">
    </td>
    <td>
      <img alt="handwrite" src="https://user-images.githubusercontent.com/26793088/109252814-44a57200-77a3-11eb-99c0-94c3ccfc8f9a.png">
    </td>
  </tr>
</table>

I believe this app would help people who want to plan to go abroad, especially to find job seriously.

I pursued to design this app about data models and workflow that has the capability of handling for people who are from all countries and who want to go all countries.

## Architecture

(Here is managed [issues](https://github.com/snamiki1212/plangoab/issues/11).)

### Component, Logic and State Dependency Flow

<!--
  [How to Modify following svg file]
    1) open draw.io.
    2) import this svg file
    3) modify
    4) export as svg file
-->
<img src="./DATA_FLOW.svg" alt="DATA_FLOW">

### Deps graph

TODO: inplement in CI and automatically save this doc in /doc dir

```zsh
# Build dot file
$ yarn graph:dot

# Build svg file from dot file
$ brwe install graphviz # prerequirements
$ yarn graph:svg
```

### Development Principles

- No Class, All Function
- Atomic Design
- Prefer explaintive code
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

### State Management

Plangoab is using Redux for global state.

Redux is global state management library. Plangoab handles a little complicated data structure because of having calendar feature. Additionally, there is no back-end so we need handle data on state management in only front-end somehow. That is why Plangoab is choosing Redux instead of Context API.

Context API can handle global state esaily but trade-off is that logic become getting complicated easiliy. On this trade-off and background that Plangoab has to need Redux at least, we choose NOT to use Context API.

### Local Cache Management

Plangoab is using localstorage with redux-persist.
That's why we have to pay attention when to change redux data shape

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

## Collaborations

<table>
  <tr>
    <td align="center">
      <a href="https://frogagent.com/">
        Frog
      </a>
    </td>
    <td align="center">
      <a href="https://cosvancouver.com/">
        COS
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://frogagent.com/">
        <img src="https://user-images.githubusercontent.com/26793088/114257682-73a02d80-9976-11eb-84cb-7b0e88658a83.png"
          alt="logo-frog" width="80" />
      </a>
    </td>
    <td align="center">
      <a href="https://cosvancouver.com/">
        <img src="https://user-images.githubusercontent.com/26793088/114257709-a0544500-9976-11eb-9258-c5d6f42e5470.png"
          alt="logo-cos" width="80" />
      </a>
    </td>
  </tr>
</table>

## Author

- [GitHub: snamiki1212](https://github.com/snamiki1212)
- [Linkedin: snamiki1212](https://www.linkedin.com/in/snamiki1212/)
