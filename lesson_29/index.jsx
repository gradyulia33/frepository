import React from 'react';
import ReactDOM from 'react-dom';

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">{this.state.count}</span>
      <ul className="filters">
        <li onClick={() => props.setFilter('')}>
          <a href="#/" className={props.filter === "" ? "selected" :null}>All</a>
        </li>
        <li onClick={() => props.setFilter('active')}>
        <a href="#/active"className={props.filter === "" ? "active" :null}>Active</a>
        </li>
        <li onClick={() => props.setFilter('completed')}>
        <a href="#/completed" className={props.filter === "" ? "completed" :null}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

function Header(props) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(event) => {
          if (event.keyCode === 13 && event.target.value) {
            props.onCreate(event.target.value);
            event.target.value = '';
          }
        }}
      />
      {/*<input id="toggle-all" class="toggle-all" type="checkbox" />*/}
			{/*<label for="toggle-all">Mark all as complete</label>*/}
      <div className="loader" />
    </header>
  );
}

class Item extends React.Component {
  render() {
    return (
      <li data-id={this.props.id} className={this.props.checked ? 'completed' : null}>
        <div className="view">
          <input
            className="toggle"
            checked={this.props.checked}
            type="checkbox"
            onChange={(event) => this.props.onEdit(this.props.id, { checked: event.target.checked })}
          />
          <label>{this.props.value}</label>
          <button onClick={()=> this.props.onRemove(this.props.id)} className="destroy"></button>
        </div>
      </li>
    );
  }
}

class ToDo extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [{
        id: '1234',
        checked: true,
        value: 'Content text',
      }],
      filter: '',
    };

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  onCreate(value) {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: Date.now(),
          checked: false,
          value,
        },
      ],
    });
  }

  onEdit(id, data) {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...data,
          };
        }

        return item;
      }),
    });
  }

onRemove(id){
    console.log('hjhjh', id);
    this.setState({
        list: this.state.list.filter(element => element.id !== id),
    });
}

setFilter(){
    this.setState({
     filter,
    });
}
    
  render() {
    return (
      <section className="todoapp">
        <Header onCreate={this.onCreate} />
        <ul className="todo-list" style={{ display: 'block' }}>
          {
            this.state.list
            .filter(item) => {
                return !item.checked
            }
            .map(data => (
              <Item key={data.id} {...data} onEdit={this.onEdit} />
            ))
          }
        </ul>
        <Footer />
      </section>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById('root'));
/*отфильтровать массив согласно фильтру
