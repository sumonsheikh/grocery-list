import React, {useState, useEffect} from 'react';
import Alert from './component/Alert';
import List from './component/List';

function App() {
  const [name, setName]           = useState('');
  const [list, setList]           = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId]       = useState(null);
  const [alert, setAlert]         = useState({show:false, msg:'', type:''});
  //handle form submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hello');
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
      <div className="grocery-container">
        <List/>
      </div>
      <button className="btn-clear">clear items</button>
    </section>
  );
}

export default App;
