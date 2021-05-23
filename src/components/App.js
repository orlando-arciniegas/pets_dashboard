/*---------------------------------\
      Components to wear         
\----------------------------------*/
import '../App.css';
import ContentWrapper from './ContentWrapper'
import SideBar from './SideBar';

/*---- Declared component ----------*/
function App() {
  return (
    /*---- Wrapper content in div ----------*/
    <div id="wrapper">
        <SideBar/>
        <ContentWrapper/>
    </div>
  );
}

/*---- Export component ----------*/
export default App;
