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
      showAlert(true,"Please enter value","danger");
    }else if(name && isEditing){
      //deal with edit
    }else{
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([ ...list, newItem]);
      setName('');
      showAlert(true,"Successfully added item","success");
    }
  }
  //show alert function
  const showAlert = (show=false,msg="",type="") =>{
    setAlert({show,msg,type});
  }
  //clear list 
  const clearList = () =>{
    showAlert(true,'Empty List','danger');
    setList([]);
  }
  // Remove item
  const removeItem = (id) =>{
    setList(list.filter((item)=> item.id !==id));
    showAlert(true,'Removed item', 'danger');
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
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
        <List items={list} removeItem={removeItem}/>
        <button className="btn-clear" onClick={clearList}>clear items</button>
      </div>
      )}
      
    </section>
  );
}
export default App;


