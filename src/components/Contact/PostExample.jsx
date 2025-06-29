import React,{useState} from "react";
import './PostExample.css';
const PostExample = () => {
    const[name,setName]=useState('')
    const[body,setBody]=useState('')
    //const[response,setResponse]=useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/comments',{
            method: 'POST',
            body: JSON.stringify({
                name:name,
                body:body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log('response is:',data)
            alert('review submitted successfully')
        })
        .catch((error)=> console.error('error is:',error))
        setName('')
        setBody('')
    }
    return(
        <div className="experience-container">
            <h2>Enter your experience</h2>
            <form onSubmit={handleSubmit} className="experience-form">
                <input type="text" placeholder="enter ur name" required value={name} onChange={(e)=> setName(e.target.value)} />
                <textarea placeholder="enter ur experience" required value={body} onChange={(e)=> setBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default PostExample