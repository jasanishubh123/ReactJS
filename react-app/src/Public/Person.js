import React from 'react'
import '../Public/Person.css'


const person =(attr)=>{

    return (
        <div >
            <p className="Person">Hey, {attr.name} { attr.age } How Are You??? and {attr.children}</p>
            <input type="text" value={attr.name} onChange={attr.change} />
        </div>
        
    )

}
export default person;