# This project using FLUX + REACT

##  Install

## Run server


## Imports
- **React** || Pega tudo no PACOTE _REACT_
- **ReactDOM** || Usado para criar o VIRTUAL DOM



## Functions

- ReactDOM.render(component, parentReceive) || _Renderiza_ os componentes do REACT
- **this.setState({obj})** || SÓ PODE MUDAR ESTADO COM ESSA FUNÇÃO
- **.bind()** || Passa um contexto de execução


## Components
- **Criar** um componente
  - Metodos
    - **render()** || _Renderiza_ o componente ao chama-lo
  - Atributos
    - **state** || Define o comportamento _ATUAL_ do componente
```
  export default class MyComponent extends React.Component{
    constructor(){
      this.state = {obj}
    }
    render(){return element;}
  }
```
- **Usar** um componente || Deve ser chamado da seguinte forma.
```
  import MyComponent from 'path/MyComponent';
```
- **PROPRIEDADES** || Funciona como atributos html
  - <Component attr={val} />
  - Para _ACESSAR_ usa-se o **this.props**
- **propTypes** || Usar _depois_ da declaração da classe
  - Define que é _obrigatório_
```
  Component.propTypes = { obj: React.PropTypes.type.isRequired};
```  

- **VALORES PADROES** || Define os _valores_ padroes para _propriedades_ não informadas
```
  Component.defaultProps = {obj};
```

## Observations
- Use _transpile babel_
- Use _webpack_
- Use JFX
- Nome do _componente_ deve ter inicio do nome _maiusculo_
- Ao criar um component deve _EXPORTAR_ com **export default**
- BOA PRATICA
  - Ter um _unico_ arquivo app.js(bootstrap) que contém o _COMPONENTE_ PRINCIPAL da app _ROOT COMPONENT_
- _JSX_ PRECISA de uma TAG que ENVOLVA TODO O HTML
- **constructor** sobreescreve constructor padrao, chamar **super()**
- Para usar variaveis no JSX tem que ter o **{}**
- Separar o CSS INLINE COM virgula **,**
- CSS INLINE nome das propriedades **não** devem receber **-**, _marginRight_
- **Proptype** || Serve para saber como usar o componente, define do que ele precisa para funcionar
  - Não gera erros para o usuário
  - Não para a aplicação/componente
  - Mostra erro no console
