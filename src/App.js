import React, {useState, useEffect} from 'react';
import Alert from './component/Alert';
import List from './component/List';

const App = ()=> {

  const [name, setName]           = useState('');
  const [list, setList]           = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId]       = useState(null);
  const [alert, setAlert]         = useState({show:false, msg:'', type:''});

  //handle form submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      //display alert
    }else if(name && isEditing){
      //deal with edit
    }else{
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([ ...list, newItem]);
      setName('');
    }
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>Grocery List</h3>
        <div className="form-control">
          <input 
            type="text" 
            placeholder="e.g. : egg" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            className="grocery"
          />
          <button type="submit" className="btn-submit">{isEditing?'edit':'submit'}</button>
        </div>
      </form>
      {list.length > 0 &&( 
      <div className="grocery-container">
        <List items={list}/>
        <button className="btn-clear" onClick={()=>setList([])}>clear items</button>
      </div>
      )}
      
    </section>
  );
}
export default App;


