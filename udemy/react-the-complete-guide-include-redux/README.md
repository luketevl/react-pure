# LINKS
- https://reactjs.org/docs/conditional-rendering.html
- https://reactjs.org/docs/events.html#supported-events
- https://medium.com/@oieduardorabelo/padr%C3%B5es-em-react-criando-componentes-d35422034d75
- https://github.com/chantastic/reactpatterns.com#proxy-component


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



# OBSERVATION