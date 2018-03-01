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
- https://validatejs.org/
- https://react.rocks/tag/Validation
- https://www.npmjs.com/package/react-validation
- https://github.com/christianalfoni/formsy-react
- https://github.com/reactjs/react-transition-group
- Tools Tests 
  - https://facebook.github.io/jest/
  - https://github.com/airbnb/enzyme
  - https://www.npmjs.com/package/react-test-renderer
  - https://github.com/airbnb/enzyme

- Examples
  - https://react.rocks/
  - https://github.com/facebook/react/wiki/Sites-Using-React
- Other libs
  - https://www.gatsbyjs.org/ (static site generator)



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
- Added `BrowserRouter`in main component
```js
<BrowserRouter>
  <App />
</BrowserRouter>
```
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

- Config the **basepath**
```js
<BrowserRouter basename="/my-app">
</BrowserRouter>
```

![Server render](https://i.imgur.com/YX9jqVo.png)


# VALIDATION METHOD

# TESTING
![What test](https://i.imgur.com/7CXXP7b.png)
![Why Testing?](https://i.imgur.com/tP7dvmC.png)

## Tools
![Testing Tools](https://i.imgur.com/xBlumDP.png)

## What to test
![What to test](https://i.imgur.com/zavlHYC.png)

## Enzyme
### Shallow
- https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
> Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

As of Enzyme v3, the shallow API **does call React lifecycle methods** such as **componentDidMount** and **componentDidUpdate**

- **Creating** **components** test
```js
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
configure({
  adapter: new Adapter()
})
describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  })
  it('should render to <NavigationItem /> if not authenticated', () =>{
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  })
})
```
- **Creating** **containers** test
  - **EXPORT** the component **class** 

- **Change PROPS**
  - use **setProps**
```js
let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />);
})
it('should render to <NavigationItem /> if authenticated', () => {
  wrapper.setProps({isAuthenticated: true});
  expect(wrapper.find(NavigationItem)).toHaveLength(3);
})
```


# ANIMATIONS
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
## REACT TRANSITION GROUP
- https://github.com/reactjs/react-transition-group

## REACT MOTION
- https://github.com/chenglou/react-motion

## REACT MOVE
- https://github.com/react-tools/react-move

## ROUTE ANIMATION
- https://github.com/maisano/react-router-transition
- https://github.com/reactjs/react-transition-group
```js
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
```

## CSS TRANSITIONS
- Modal
```css
.Modal {
    position: fixed;
    z-index: 200;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    top: 30%;
    left: 25%;
    width: 50%;
    transition: all .3s ease-out;
}

.ModalOpen{
    opacity: 1;
    transform: translateY(0);
}
.ModalClosed{
    opacity: 0;
    transform: translateY(-100%);
}

/* OR */

.ModalOpen{
    animation: openModal .4s ease-out forwards;
}
.ModalClosed{
    animation: closeModal .4s ease-out forwards;
}

@keyframes openModal{
    0%{
        opacity: 0;
        transform: translateY(-100%);    
    }
    50%{
        opacity: 1;
        transform: translateY(90%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes closeModal{
    0%{
        opacity: 1;
        transform: translateY(0);
    }
    50%{
        opacity: .8;
        transform: translateY(60%);
    }
    100%{
        opacity: 0;
        transform: translateY(-100%);    
    }
}
```

# OBSERVATION
- **Constructor**
  - **Required** **super**
- **AXIOS**
  - Cool work with **instances**
  - Good **intercptors** and **defaults**
  - *ROUTER**
    - In **switch** the **router** **ORDER** ARE **IMPORTANT**
- REACT 16 | **INPUT TYPE**
 - Pass props in **lowercase**
```js
// INCORRECT
<Component inputType=""/>

// CORECT
<Component inputtype=""/>
```
- **Animation**
  - Render element only if necessary, example:
```js
render(){
  return(
    <div>
      {this.state.modalIsOpen &&
          <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
      }
    </div>

  )
}
```