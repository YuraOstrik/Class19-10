import './App.css';
import { UserForm } from './Components/TaksValid1';
import { NameForm } from './Components/Task1';
import { EssayForm } from './Components/Task2';
import { FlavorForm } from './Components/Task3';
import { FileInput } from './Components/Task4Ref';
import { CustomTextInput } from './Components/Task5Ref2';
import { CustomTextInput2 } from './Components/Task6Ref3';
import { Calculator } from './Components/Task7State-up';
import { Forms } from './Components/Forms';
import Homework1 from './Homework1';
import Homework2 from './Homework2';

function App() {
  return (
    <div className="container">
      <Homework1 />
      <Homework2 />
    </div>



    // <div>
    //   {/* <Forms confirm = 'none'/>
      
    //   <br></br>
    //   <br></br> */}

    //   {/* <Forms/> */}
    //     <UserForm></UserForm>

    // {/* <NameForm/> */}
    // {/* <EssayForm/> */}

    // {/* <FlavorForm/> */}
    // {/* <UserForm /> */}

    // {/* <FileInput/> */}
    // {/* <CustomTextInput/>  */}
    // {/* <CustomTextInput2/> */}


    //  {/* Подъем состояния */}
    //  {/* https://ru.legacy.reactjs.org/docs/lifting-state-up.html */}
      
    //   {/* <Calculator/>  */}
      
    // </div>
  );
}

export default App;
