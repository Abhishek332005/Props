import React from "react";

function Parent() {
    return ( 
        <>
        <Child name="Abhishek" rollNo="12345" section = "CSE-AI"/>
        </>
     );
}

function Child({name,rollNo,section}) {
    return ( 
        <div style= {{textAlign:"center"}}> 
        <h1>Hello {name }</h1>
        <h1>Yor Roll No is - {rollNo}</h1>
        <h1>Your Section is : {section}</h1>
       
        </div>
     );
}

export default Parent;