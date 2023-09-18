'use client'
import Navbar from '@/app/registration/components/navbar';

export default function Preview() {
  const storedJsonString = localStorage.getItem('myData');
  const participants = JSON.parse(storedJsonString);

  return (
    <>
      <Navbar currentPage='page2' />
      <div className='flex items-center ml-4 text-3xl mt-8 font-extrabold text-black'>
  PREVIEW
</div>

      <div className="p-4 grid grid-cols-4 gap-4" >
        {participants.map((participant, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Participant {index + 1}
            </h3>
            <p className="text-gray-700">Name: {participant.name}</p>
            <p className="text-gray-700">Email: {participant.email}</p>
            <p className="text-gray-700">College Name: {participant.college}</p>
            <p className="text-gray-700">Discord Id: {participant.discord}</p>
            <p className="text-gray-700">T-Shirt Size: {participant.tshirt}</p>
            <p className="text-gray-700">Food Preference: {participant.food}</p>
          </div>
        ))}
      </div>
    </>
  );
}
