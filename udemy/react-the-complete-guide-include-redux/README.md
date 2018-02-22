# LINKS
- https://reactjs.org/docs/conditional-rendering.html
- https://reactjs.org/docs/events.html#supported-events
- https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-criando-componentes-d35422034d75
- https://github.com/chantastic/reactpatterns.com#proxy-component
- https://github.com/facebookincubator/create-react-app
- https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
- https://github.com/css-modules/css-modules
- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- https://reactjs.org/docs/error-boundaries.html
- https://reactjs.org/docs/higher-order-components.html


# FUNCTIONAL COMPONENTS
- Don`t save **states**
- Receive **props** and **context**
- Have **local** variables
- Can be define:
  - **propTypes**
  - **defaultProps**
  - **contextTypes**


# Functional (Stateless) Components
- Don`t have **state** and **constructor**

# Class (Statefull) Components
- Have **state**
- Have **constructor**

# Container Components vs. Presentational Components

# Higher-Order Components (HOC)
- A higher-order component (HOC) is an advanced technique in React for reusing component 
logic
- Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

HOCs are common in third-party React libraries, such as Redux’s connect

![Stateless VS Statefull](https://i.imgur.com/VkJM4Aw.png)

# JSX
- Restrictions:
  - class use **className**
  - **events** in **camelCase**
    - onclick as onClick
  - **Required** return only element
    - Example
```js
// correct
return (
  <div></div>
)
```
```js
// erro
return (
  <div></div>
  <h1></h1>
)
```
## Conditional Rendering
- **Inline** with **Logical &&** Operator **SIMULE IF**
```js
return(
  <div>
    { variabel.name && 
      <div></div>
    }
  </div>
)
```

- **Inline** with **Logical ||** Operator **SIMULE UNLESS**
```js
return(
  <div>
    { variabel.name || 
      <div></div>
    }
  </div>
)
```

- **Inline** with **Logical ?** Operator **SIMULE IF-ELSE**
```js
return(
  <div>
    { variabel.name ?  
      <div></div>
      : <div></div>
    }
  </div>
)

{condition ? (
  <span>
    Rendered when `truthy`
  </span>
) : (
  <span>
    Rendered when `falsey`
  </span>
)}
```

# Component Lifecycle
- Only avaible in **Stateful Components**
![Lifecycle](https://i.imgur.com/jqTkn13.png)

## Creating
![Lifecycle on Creating](https://i.imgur.com/haTY0W2.png)
- **Constructor** -using ES6-
  - **super(props)** use to:
    - **DO** Set **STATE**
    - **DONT** Cause -side effects-
```js
constructor(props){
  super(props);
}
```
- **componentWillMount**
  - **DO** Update **state**, last minute Optimization
  - **DONT** Cause -side effects-
```js
componentWillMount(){}
```
- Render
  - Prepare and sctructure **JSX** CODE
```js
render(){}
```
- ComponentDidMount
  - **DO** Cause -side effects-
  - **DONT** Update **state** or trigger re render
```js
componentDidMount(){}
```
![Lifecycle on Creating complete](https://i.imgur.com/jPiQP9p.png)

## Update

## Trigged by Parent
- **componentWillReceiveProps**
  - **DO** Sync **state** to **props**
  - **DONT** Cause -side effects-
```js
componentWillReceiveProps(nextProps){}
```
- **shouldComponentUpdate**
  - **MAY CANCEL UPDATING PROCESS**
  - **DO** Decide whether to **Continue** or **not**
  - **DONT** Cause -side effects-
```js
shouldComponentUpdate(nextProps, nextState){}
```
- **componentWillUpdate**
  - **DO** Sync **state** to **props**
  - **DONT** Cause -side effects-
```js
componentWillReceiveProps(nextProps, nextState){}
```
- Prepare and sctructure **JSX** CODE
```js
render(){}
```
- **UPDATE CHILD COMPONENT PROPS**
- componentDidUpdate
  - **DO** Cause -side effects-
  - **DONT** Update **state** or trigger re render
```js
componentDidUpdate(){}
```
![Lifecycle on Updating by parent complete](https://i.imgur.com/wqgkMTf.png)



## Trigged by Internal Change
- **shouldComponentUpdate**
  - **MAY CANCEL UPDATING PROCESS**
  - **DO** Decide whether to **Continue** or **not**
  - **DONT** Cause -side effects-
```js
shouldComponentUpdate(nextProps, nextState){}
```
- **componentWillUpdate**
  - **DO** Sync **state** to **props**
  - **DONT** Cause -side effects-
```js
componentWillReceiveProps(nextProps, nextState){}
```
- Prepare and sctructure **JSX** CODE
```js
render(){}
```
- **UPDATE CHILD COMPONENT PROPS**
- componentDidUpdate
  - **DO** Cause -side effects-
  - **DONT** Update **state** or trigger re render
```js
componentDidUpdate(){}
```
![Lifecycle on Updating by parent complete](https://i.imgur.com/BCGi4h6.png)


![Rending & Updates](https://i.imgur.com/npyLBhG.png)
![How react updates the DOM](https://i.imgur.com/3jsnFhN.png)


# REF
- Reference by element
- Only avaible in **state full components**
```js
import React, { Component } from 'react';
export default class Input extends Component{
  render(){
    return (
      <input 
        type="text"
        ref={input => this.inputElement = input.value; }
      />
    )
  }
}
```

# OBSERVATION
- **Constructor**
  - **Required** **super**