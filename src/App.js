
import Header from "./Header";
import'./App.css'
import'bootstrap/dist/css/bootstrap.min.css';

import React, { useState }  from 'react'


const App = () => {

const total=29;
  
  const [present, setPresent] = useState([]);
  const [input, setInput] = useState("");
  const studentList = [
    "Arun", "Aruvi", "Bella", "Balu", "Babu", "Camilia", "Chinnu", "Dravid",
    "Dinesh", "Eva", "Fathima", "Fahad", "goki", "Kokila", "Hema", "Hemilia",
    "Inthu", "Indhra", "Jaivel", "Jonny", "Lilly", "Moni", "Nivi", "Nainika",
    "sneha", "subatra", "sumi", "Vinesh", "Yuva"
  ];

   const handleClick = () => {
    
    
    if(input==""){
      alert("Please enter your name")
    }


    const match=studentList.find ((list) =>list.toLowerCase()===input.toLowerCase());

   if(!match){
    alert("Not in the list")
    
   }
    

  if(present.includes(match)){
    alert("Already marked present")

  }

  setPresent((prev)=>[...prev,match]);
  setInput("") ;
  };



  return (
    <div>
      <h1>UseState</h1>
      <h5 className="atten">Attendence System</h5>

      <div className="present">
      <p><b>Present:{present.length}</b></p>
      <p><b>Absent:{total-present.length}</b></p>
      <p><b>Total:{total}</b></p>
      </div>

      <div className="box">
    <div className="square">
    <input type="text" id="name" placeholder="Enter Your Name" value={input} onChange={(e)=>setInput(e.target.value) }></input>
    </div>
    <div className="sub">
    <button type="submit" id="submit" onClick={handleClick}>Submit</button>
    
   </div>
   </div>

    

    <div className="tbl">
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Check</th>
        <th>StudentName</th>
        
      </tr>
    </thead>
    <tbody>
     
      {studentList.map((student, index) => (
        <>
      <tr key={index}>
        <td><input type="checkbox" checked={present.includes(student)}></input></td>
        <td>{student}</td>
        
      </tr>
      </>
      
      )
    )
  }  

</tbody>
</table>







    
    </div>
    
    </div>
  )
};



export default App;
