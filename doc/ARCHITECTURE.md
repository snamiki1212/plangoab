# ARCHITECTURE

(Here is managed [issues](https://github.com/snamiki1212/plangoab/issues/11).)

## Component, Logic and State Dependency Flow

<!--
  [How to Modify following svg file]
    1) open draw.io.
    2) import this svg file
    3) modify
    4) export as svg file
-->
<img src="./DATA_FLOW.svg" alt="DATA_FLOW" />

## ER of core model

`/src/core` has model data and this ER is below.

<img src="./ER_CORE.svg" alt="ER_CODE" />

## Deps graph

TODO: inplement in CI and automatically save this doc in /doc dir

```zsh
# Build dot file
$ yarn graph:dot

# Build svg file from dot file
$ brwe install graphviz # prerequirements
$ yarn graph:svg
```

## Don't Use `this` and `prototype`

As literal.

## Use regular function component

// TODO: create eslint rule
Because arrow function doesn't have display name but regular function has.

```tsx
// NG
const Item = () => <div>this is item</div>;

// OK
function Item() {
  return <div>this is item</div>;
}
```

## Explaintive / Descriptive Code

```ts
// NG
const nl = l.map((i) => i * i);

// OK
const newList = list.map((item) => item * item);
```

## Atomic Design

Plangoab is following the way of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

## No Class, Yes Function

Plangoab adopted FP way when to handle model layer.

So there is no class but only Plain JavaScript & Functions in `/core` directory.
On the otherhands, we need strictly implicit rule to handle model. We must not handle model data without function of this model layer. If happend, I assume code would become easily getting chaos.

## State Management

Plangoab is using Redux for global state.

Redux is global state management library. Plangoab handles a little complicated data structure because of having calendar feature. Additionally, there is no back-end so we need handle data on state management in only front-end somehow. That is why Plangoab is choosing Redux instead of Context API.

Context API can handle global state esaily but trade-off is that logic become getting complicated easiliy. On this trade-off and background that Plangoab has to need Redux at least, we choose NOT to use Context API.

## Local Cache Management

Plangoab is using localstorage with redux-persist.

That's why we have to pay attention when to change redux data shape. Now that redux-persist has `version` config so we care it when to upgrade data shape.
