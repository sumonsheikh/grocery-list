import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

 const List = ({items}) => {
    const deleteItem = (id) =>{

    }
    return (
        <div className="grocery-list">
           
             {items.map((item) =>{
                return(
                    <article key={item.id} className="grocery-item">
                        <p className="title">{item.title}</p>
                        <div className="btn-container">
                            <button type="submit" className="btn-edit">
                                <FaEdit/>
                            </button>
                            <button type="submit" className="btn-delete" onClick={(id)=>deleteItem()}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};
export default List;