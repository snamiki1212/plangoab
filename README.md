<p align="center">
  <a href="https://plangoab.snamiki1212.com">
    <img alt="Plangoab is an immigration scheduler application for going abroad." src="https://user-images.githubusercontent.com/26793088/114226819-f7332d80-9928-11eb-93f8-4f9919018bf6.png">
  </a>
</p>

<p align="center">
  <a align="center" href="https://github.com/snamiki1212/plangoab/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License:GPLv3" />
  </a>
  <a align="center" href="https://codecov.io/gh/snamiki1212/plangoab">
    <img src="https://codecov.io/gh/snamiki1212/plangoab/branch/main/graph/badge.svg?token=PALDGS8QHD"/>
  </a>
</p>

# Plangoab

<b><a href="https://plangoab.snamiki1212.com">Plangoab</a></b> <i>(/plˈængóʊb/)</i> is an immigration scheduler application for going abroad.

(Plangoab stands for '<b>plan</b> to <b>go ab</b>road')

- Application: <a href="https://plangoab.snamiki1212.com">https://plangoab.snamiki1212.com</a>
- Backend Repository: [snamiki1212/plangoab-api](https://github.com/snamiki1212/plangoab-api)
- Frontend Repository: [snamiki1212/plangoab](https://github.com/snamiki1212/plangoab) (This repository)

### Features

- 📝 Customize schedule
- ⚙️ Generate plans with many options
- 💁‍♂️ Share schedules (TODO: Up comming)
- 📊 Export as PDF
- 💻 Auto save

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
      <a href="https://plangoab.snamiki1212.com">
        <img
        src="https://user-images.githubusercontent.com/26793088/109248982-b37ecd00-779b-11eb-835a-21ba4d9e9e92.gif"
        alt="customize-plans">
      </a>
    </td>
    <td>
      <a href="https://plangoab.snamiki1212.com">
        <img src="https://user-images.githubusercontent.com/26793088/109247952-b8428180-7799-11eb-906f-44156c01746c.gif"
        alt="example-generating-plans">
      </a>
    </td>
  </tr>
</table>

### Who use?

Plangoab might help like esipecially below people:

- Person going abroad to find job
- Person going abroad to go to school
- An Immigration consultant/agent

### Why create?

Because of easily planning schedule for going abroad.

If you go abroad to find jobs, you have to think about some topics like below.

- When is the deadline to go abroad with Working Holiday Visa?
- How long can you stay there?
- Should you go school in order to get visa? If so, which school? And when you should start?
- etc...

Actually, in my case, I handwrote some plans but made some mistakes when to calculate a Visa and my ages. Fortunatelly, I realized it but I almost ruined my career. (Handwriting charactors are Japanese :D )

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

I believe Plangoab would help people who want to plan to go abroad, especially want to find job seriously.

## Architecture

<a href="./doc/ARCHITECTURE.md">
  <img src="doc/DATA_FLOW.svg" alt="Header" />
</a>

Read [ARCHITECTURE.md](./doc/ARCHITECTURE.md) more details.

### Tech Stack

<table>
  <tr>
    <td></td>
    <td align="center"><b>Using</b></td>
  </tr>
  <tr>
    <td>Core</td>
    <td>Next, Redux, FullCalendar</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>styled-components</td>
  </tr>
  <tr>
    <td>UI</td>
    <td>MUI</td>
  </tr>
  <tr>
    <td>CI</td>
    <td>GitHub Actions</td>
  </tr>
  <tr>
    <td>Test</td>
    <td>Cypress, React Testing Library, Jest, Fishery</td>
  </tr>
  <tr>
    <td>Code Coverage</td>
    <td><a href="https://codecov.io/gh/snamiki1212/plangoab">Codecov</a></td>
  </tr>
  <tr>
    <td>Hosting</td>
    <td><a href="https://plangoab.snamiki1212.com">GitHub Pages + Netlify</a></td>
  </tr>
</table>

## Install

```zsh
$ git clone <this-repo>
$ yarn
$ yarn start #=> open http://local:3000
```

## Design

(TODO: Color Pallete)

- [Figma](https://www.figma.com/file/82LVs78k7dV4z8QoTBQ728/Plangoab?node-id=0%3A1)

## Contribution

Welcome, whenever, whoever, whatever! Feel Free to create PRs or issues.

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

## Licence

[GPL-3.0](https://github.com/snamiki1212/plangoab/blob/main/LICENSE.md)

Because of using [Fullcalendar Premium open-source project license](https://fullcalendar.io/license) as GPL-3.0. That makes a plangoab's license a same license.
