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
- https://reactjs.org/docs/typechecking-with-proptypes.html
- https://reactjs.org/docs/refs-and-the-dom.html
- https://github.com/axios/axios#interceptors


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
# PERFORMANCE
- Validate `componentWillUpdate` check if the props/state not equals
```js
  shouldComponentUpdate(nextProps, mextState){
      return nextProps.show !== this.props.show;
    }
```

# HTTP
![Http requests](https://i.imgur.com/8SQth7a.png)


# ROUTING
- React dont have routing in your core
![Routing in SPA](https://i.imgur.com/rlUGdiO.png)
- **Route** | Create route
  - **path** as uri
    - **:paramName** | Pass parameter
      - Get the params `this.props.match.params.paramName`
  - **exact** check the complete url and match is url as _exactly_ equal the **path**
  - **component** render specify _component_
```js
<Route path="/" exact render={()=><h1>test</h1>} />
<Route path="/" render={()=><h1>test</h1>} />
<Route path="/" component={<Component />} />
<Route path="/:paramName" exact component={<Component />} />
```
- **Switch** | Dont load router in roter.
```js
<Switch>
  <Route path="/" exact component={<Component />} />
  <Route path="/:paramName" exact component={<Component />} />
</Switch>
```

- **Link** | Create link to specify router, **don't reload all page**
  - **to** | String or object
    - **pathname** | the uri
    - **hash** | id to anchor
    - **search** | 
```js
<Link to="/">Home</Link>
<Link to={{
  pathname: '/path',
  hash: '#anchor',
  search: '?querystring'
}}>Home</Link>
``` 
- **withRouter** | **HOC** Pass the props of **route** to component
```js
export default withRouter(component);
```

## RELATIVE AND ABSOLUTE PATH
```js
<Link to={{
  pathname: this.props.match.url +'/path', // absolute
  pathname: '/path', // relative
}}>Home</Link>
``` 

## Styling Active Route
- **NavLink** 
  - **exact** check the complete url and match is url as _exactly_ equal the **path**
  - **activeClassName** | Define the class to active link, default is **active**
  - **activeStyle** | Define the inline style to active link
```js
import {NavLink} from 'react-route-dom';
<NavLink 
activeClassName="active" 
activeStyle={{
  color: '#f98999'
}}
exact 
to="/">Home</NavLink>
```

## Navigation programmaticaly
  - Dont replace to *current** HISTORY, adde new in stack
```js
this.props.history.push({
      pathname: `/${id}`
})
```
- Replace the *current** HISTORY
```js
this.props.history.replace({
      pathname: `/${id}`
})
```
- **Redirect** | Replace to *current** HISTORY
  - **to**
  - **from**
```js
<Redirect to="/a" from="/" />
```

## GUARDS

# SPLIT CODE
- Load component on **demand(chunks)**
```js
import React, { Component } from 'react';
const asyncComponent =(importComponent) => {

  return class extends Component{
    state = {
      component: null
    }
    componentDidMount(){
      importComponent()
        .then(cmp => {
          this.setState({component: cmp.default});
        });
    }
    render(){
      const C = this.state.component;
      return C ?  <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;
```





# OBSERVATION
- **Constructor**
  - **Required** **super**
- **AXIOS**
  - Cool work with **instances**
  - Good **intercptors** and **defaults**
  - *ROUTER**
    - In **switch** the **router** **ORDER** ARE **IMPORTANT**