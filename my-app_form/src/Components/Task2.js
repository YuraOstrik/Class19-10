import React from "react";

export class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      if( this.state.value.length<5)
      {
        event.preventDefault();
      }
      else
      {      
      alert('Сочинение отправлено: ' + this.state.value);
     }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Сочинение:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }
  /*В React <textarea> использует атрибут value!!
  инициализация  this.state.value в конструкторе, так что в текстовой области изначально есть текст.
  
  */