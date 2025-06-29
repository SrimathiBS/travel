import React,{useState,useEffect} from "react";
import './BookingSearch.css';
import { v4 as uuidv4 } from 'uuid';
const BookingSearch = ()=>{
  const [name,setName]=useState('');
  const [source,setSource]=useState('')
  const [destination,setDestination]=useState('')
  const [bookings,setBookings]=useState([])
  const [searchName,setSearchName]=useState('')
  const [match,setMatch]=useState([])

useEffect(()=>{
  const savedBookings= JSON.parse(localStorage.getItem('bookinglist') || '[]')
  setBookings(savedBookings)
},[]);

const handleBookingSubmit =(e) =>{
  e.preventDefault()
  const newBooking = {
    id:uuidv4(),
    name,
    source,
    destination
  };
  const updatedBookings=[...bookings,newBooking]
  setBookings(updatedBookings)
  localStorage.setItem('bookingLists',JSON.stringify(updatedBookings))
  setName('')
  setSource('')
  setDestination('')
  alert("booking is added")
}
const handleSubmit =(e) => {
  e.preventDefault();
  const matched = bookings.filter(
    (b) => b.name.toLowerCase().trim() === searchName.toLowerCase().trim()
  );
  setMatch(matched);
};
return (
  <>
  <div className="booking-container">
    <h2>Add a booking</h2>
    <form onSubmit={handleBookingSubmit} className="booking-form">
      <input type="text" required placeholder="enter name" value={name} onChange={(e)=> setName(e.target.value)} />
      <input type="text" required placeholder="enter source" value={source} onChange={(e)=> setSource(e.target.value)} />
      <input type="text" required placeholder="enter destination" value={destination} onChange={(e)=>setDestination(e.target.value)} />
      <button type="submit">Add booking</button>
    </form>
  </div>

   <h2>Search booking by name</h2>
   <form onSubmit={handleSubmit} className="booking-form">
    <input type="text" required placeholder="enter name" value={searchName} onChange={(e)=>setSearchName(e.target.value)} />
    <button type="submit">Search</button>
   </form>

  <div className="booking-container">
    <h4>Booking details: </h4>
    <ul>
      {match.map((b)=>(
        <li key={b.id}>
          <strong>Source:</strong> {b.source} | <strong>Destination:</strong> {b.destination}
        </li>
      ))}
    </ul>
  </div>
</>
)
}

export default BookingSearch;