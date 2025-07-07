import React from "react";

export function UserForm ()
{
      const [state, setState] = React.useState( {name: '', age:  0, nameValid: false, ageValid: false});
       
      function validateAge(age){
          return age>16;
      }
      function validateName(name){
          return name.length>2;
      }

      function onAgeChange(e) {
          var val = e.target.value;
          var valid = validateAge(val);
          setState({name: state.name, nameValid:state.nameValid, age: val, ageValid: valid});
      }
      function onNameChange(e) {
          var val = e.target.value;
          console.log(val);
          var valid = validateName(val);
          setState({name: val, nameValid: valid, age:state.age,ageValid:state.ageValid});
      } 

      function handleSubmit(e) {
         
          if(state.nameValid === true && state.ageValid===true)
          {
              alert(`Имя: ${state.name} Возраст: ${state.age}`);
          }
          else
          {
            e.preventDefault();
          }
      } 
      var agevalid = state.ageValid===true? "valid":"invalid";
      var namevalid =  state.nameValid===true? "valid":"invalid";
        return (
            
              <form onSubmit={handleSubmit}>
                  <p>
                      <label>Имя:</label><br />
                      <input type="text" value={state.name} onChange={onNameChange} className={namevalid} />
                  </p>
                  <p>
                      <label>Возраст:</label><br />
                      <input type="number" value={state.age} 
                          onChange={onAgeChange}  className={agevalid} />
                  </p>
                  <input type="submit" value="Отправить" />
              </form>
          );
}
