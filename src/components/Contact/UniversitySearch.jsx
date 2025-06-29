import React,{useState,useEffect} from "react";
import './UniversitySearch.css'
const UniversitySearch = ()=>{
    const [name,setName]= useState('')
    const [userList,setUserList]= useState([])
    useEffect(()=>{
        if(name.trim()=== '') return;
        fetch('http://universities.hipolabs.com/search?country='+name).then((jsonData)=>jsonData.json()).then((data)=>{
            setUserList(data);
        })
        .catch((error)=>{
            console.error('error :',error)
        })
    },[name])
    return (
        <div className="university-container">
            <h2>Find Univercity</h2>
            <input type="text" required placeholder="enter country name" value={name} onChange={(e)=> setName(e.target.value)} />
            <h3>Universities in {name} are:</h3>
            <ul>
                {userList.map((uni,index)=>(
                    <li key={index}>
                        <strong>State:</strong> {uni['state-province']}  || <strong>University:</strong> {uni.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default UniversitySearch;