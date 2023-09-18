
'use client'
import Navbar from '@/app/registration/components/navbar';

export default function preview(){

  const storedJsonString = localStorage.getItem('myData');
  const participants = JSON.parse(storedJsonString);

return(

  <>
  <Navbar currentPage='page2'></Navbar>
  <div> {participants.map((participant, index) => (
    <div key={index} className="mb-4">
      <h3 className="text-lg font-semibold">
        Participant {index + 1}
      </h3>
      <p>Name: {participant.name}</p>
      <p>Email: {participant.email}</p>
      <p>College Name: {participant.college}</p>
      <p>Discord Id: {participant.discord}</p>
      <p>T-Shirt Size: {participant.tshirt}</p>
      <p>Food Preference: {participant.food}</p>

    </div>
  ))}</div>

  </>

)

}