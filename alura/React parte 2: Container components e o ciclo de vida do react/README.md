# REACT


# LINKS


# PLUGINS
- _Install_ **react**
```shell
npm install react --save
```
- _Install_ **react-router**
```shell
npm install react-router --save
```
- **Create react app**
	- _Install_

```shell
npm install -g create-react-app
```
	- _Create_ _project_
```shell
create-react-app projectName
```

# LIFE CYCLE
- **componentDidMount(){}** | _Called_ **after** the primary **render call**

# FUNCTIONS
- **Import** | Used to import **js**, **css**
```javascript
import Ap from "./App";
import from '../assets/component.css';
```
- **setState** | Used _to_ change value and update view(**render**)
```javascript
this.setState({
	field
});
```

# CREATING

## REACT ROUTER
```jsx
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
	(
		<Router history={browserHistory}>		
			<Route path="/" component={Login}>
			<Route path="/list" component={List}>
		</ Router>
	),
	document.getElementById('idName')
)
```

## COMPONENTS
- **Create**
```javascript
import React from 'react';
export default class ComponentName extends React.Component{
	constructor(){}
	render(){ return();}
}
```
- _Use_
```javascript
import ComponentName from './components/ComponentName';
```
```jsx
<ComponentName />
```

- **State** | State **component itself**
```javascript
this.state;
```
- **Props** | State **passed** by parameters
```javascript
this.props.attrName;
```
```jsx
<ComponentName attrName=value/>
```
- **ref** | Ref **element itself** equal name
```javascript
this.state;
```




# OBSERVATIONS
- **ATTENTION*
	- _Don't use_ **class**, _use **className**