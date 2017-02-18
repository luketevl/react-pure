## Instalação
- Use o **create React App** | Feito pelo facebook que já tem tudo pronto
```
npm install create-react-app -g
```
- **Cria** um _novo projeto_
```
create-react-app nameApp
```

## Modulos
- **React** | _Criar_ **componentes** _customizados_
```
import React from 'react';
```
- **ReactDOM** | _Criar_ **DOM VIRTUAL**
```
import ReactDOM from 'react-dom';
```
- **PUBSUBjs** | Usado para criar **publish** e **subscribe**
```
npm install pubsubjs --save
```
- **REACT ROUTER** | _Criado_ para **SAP**, _navegação_
```
npm install react-router --save
```
  - **Criando** _ROTAS_
    - **Router** | _Agrupa_ as **rotas**
    - **Route** | _Cria_ cada **rota**
    - **browserHistory** | _Muda_ a _forma_ com o que ele **navega**
    - **IndexRoute** | **ROTA PADRAO** caso nenhuma _case_ ele _exibe a padrao_
```
import {Router, Route, browserHistory} from 'react-router';
React.Dom.render(
  <Router history={browserHistory}>
    <Route path="/" component=componentName />
    <IndexRoute component=componentName />
      <Route path=path component=componentName />
    </Route>
  </Router>
  );
```
  - **USANDO** _ROTAS_ | **Link** Remove uma chamada http
  ```
  import {Link} from 'react-router';
  <Link to=path><Link>
  ```


## CLASSE
- **Criar componentes**
```
export default class NameComponent extends React.Component{}
```

### Metodos
- **Constroi** _componente_
```
render(){
  return (
    <JSX>
    );
}
```
- **Cria** um _construtor_ | Apenas _iniciar_ coisas _simples_
```
constructor(){
  super();
}
```
- **MODIFICA** valor do **state** | Ele **renderiza**
```
setState({});
```
- **PEGA** o _valor_ de in _input_
```
event.target.value;
```

#### Ciclo de Vida
- Quando _componente_ é **MONTADO** | _Chamado_ quando **RENDER** é _chamado_ pela **PRIMEIRA VEZ**
```
componentDidMount(){}
```
- Quando _componente_ ainda não foi  **MONTADO** | _Chamado_ quando **RENDER** ainda **não** foi _chamado_ pela **PRIMEIRA VEZ**
```
componentWillMount(){}
```

#### PubSubjs
- **Informa** a _todos os interessados_ que há algo _novo_
```
PubSub.publish(topic, info);
```
- **Ouve** um _evento_ | Se _inscreve_
```
PubSub.subscribe(topic, function(topic, data){});
```

### Atributos
- **Guarda** o _estado_ da aplicação
```
this.state = {};
```
- **Guarda** os _parametros_ da aplicação | Parametros _enviados_ para o **componente**
```
this.props.name;
```
- **ROTAS FILHAS** os _componentes_ filhos | Filhas _enviados_ para o **componente**
```
this.props.children;
```


## JSX
- **Código** _dinamico_ usa a **chaves**
```
{}
```

## Imports
- **Importar** _css_
```
import 'path/file.css';
```

## Observações
- **Create React App**
  - **index.html** é o ponto de **ENTRADA** da _aplicação_
- **JSX** | Usa _marcação XML_ dentro do **javascript**
  - _Usar_ **BABEL JSX TRANSFORM**
  - _Usar_ **BABEL ES2015 PRESET**
  - **CLASSE** nos _elementos_ deve-se usar o **className**
  - Tem que _fechar_ todas as _tags_
  - O **modulo** _exportado_ do **react** tem que se _chamar_ **React**
- **WEBPACK** e **BROWSERIFY** | _Pega_ tudo que roda no _backend_ e faz rodar no _navegador_
- Se for _usar_ **jquery**(nao faca isso hahaha) deve usr o **.bind()** para definir o **escopo** do **this**
- Cada **elemento** deve ter seu _identificador_ **key**, assim ele _sabe_ quem realmente vai _atualizar_, caso contrário ele _atualiza_ **TUDO**
- **INPUTS** devem ter seu **value** com o **state** e ter um _evento_ que _captura_ o que é digitado **onChange**
```
<input type="text" value={this.state.name} onChange={this.eventHandle} />
```
- **HIGH component** _box_ ou _wrapper_ | _encapsula_ **estados** para usar em mais de um _component_
- **REACT ROUTER**
  - _Criar_ **filhas** em _rotas_ <Route><Route></Route></Route>
