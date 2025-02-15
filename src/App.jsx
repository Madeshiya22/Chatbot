import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
 async function generateAnswer(){
    setAnswer("loading..");
     const response = await axios ({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD76x8jeBVQYNx6bBTRMMO_sFY1tDlAV8E",
        method: "post",
        data:{
          contents:[
            {parts:[{text: question}]},
          ],
        },
      });
       setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  
  return (
    <>
    <h1 style={{color:'solid black',display: 'flex',marginRight:'80px', flexDirection: 'column', height: '5', justifyContent: 'center', fontFamily: 'Arial'  }}> Chat AI </h1>
    <textarea style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10', justifyContent: 'center', fontFamily: 'Arial',borderRadius:'10px'}} value={question} onChange={(e)=>setQuestion(e.target.value)}  cols="50" rows="12"
      placeholder="Anything ask to me"></textarea>
    <button style ={{display: 'flex',marginLeft:'80px', marginTop: '10px',flexDirection: 'column', alignItems: 'center', height: '10', justifyContent: 'center', fontFamily: 'Arial',borderRadius:'120px' }}onClick={generateAnswer}>Generate answer</button>
    <pre>{answer}</pre>
    </>
  
  )
}

export default App
