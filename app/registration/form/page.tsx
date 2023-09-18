"use client";
// pages/index.tsx
import { useState } from "react";
import Navbar from "../components/navbar"

const MAX_PARTICIPANTS = 8;

const Home: React.FC = () => {
  const [participants, setParticipants] = useState<any[]>([
    {
      name: "",
      email: "",
      college: "",
      discord: "",
      tshirt: "",
      food: "",
      photo: "",
      id: "",
    },
  ]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  var topass = JSON.stringify(participants);
  const handleRemoveParticipant = (indexToRemove: number) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleAddParticipant = () => {
    if (participants.length < MAX_PARTICIPANTS) {
      setParticipants([
        ...participants,
        {
          name: "",
          email: "",
          college: "",
          discord: "",
          tshirt: "",
          food: "",
          photo: "",
          id: "",
        },
      ]);
    }
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string | File
  ) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant, i) =>
        i === index ? { ...participant, [field]: value } : participant
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    const myObject = participants;
    const jsonString = JSON.stringify(myObject);
    localStorage.setItem('myData', jsonString);
    window.location.href = '/registration/form/preview';
   

  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (

    <>
    <Navbar currentPage="page1"></Navbar>
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-semibold">Participant Form</h1>
      <form>
        {participants.map((participant, index) => (
          <div key={index} className="mb-4 border rounded-lg p-4">
            <h2 className="text-lg font-semibold">Participant {index + 1}</h2>
            <div className="mb-2">
              <label
                htmlFor={`name${index}`}
                className="block text-sm font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                id={`name${index}`}
                name={`name${index}`}
                value={participant.name}
                onChange={(e) =>
                  handleParticipantChange(index, "name", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`email${index}`}
                className="block text-sm font-medium"
              >
                Institute Email Id:
              </label>
              <input
                type="email"
                id={`email${index}`}
                name={`email${index}`}
                value={participant.email}
                onChange={(e) =>
                  handleParticipantChange(index, "email", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`college${index}`}
                className="block text-sm font-medium"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id={`college${index}`}
                name={`college${index}`}
                value={participant.college}
                onChange={(e) =>
                  handleParticipantChange(index, "college", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`discord${index}`}
                className="block text-sm font-medium"
              >
                Discord ID:
              </label>
              <input
                type="text"
                id={`discord${index}`}
                name={`discord${index}`}
                value={participant.discord}
                onChange={(e) =>
                  handleParticipantChange(index, "discord", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`tshirt${index}`}
                className="block text-sm font-medium"
              >
                T-Shirt Size:
              </label>
              <input
                type="text"
                id={`tshirt${index}`}
                name={`tshirt${index}`}
                value={participant.tshirt}
                onChange={(e) =>
                  handleParticipantChange(index, "tshirt", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor={`food${index}`}
                className="block text-sm font-medium"
              >
                Food Preference:
              </label>
              <select
                id={`food${index}`}
                name={`food${index}`}
                value={participant.food}
                onChange={(e) =>
                  handleParticipantChange(index, "food", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              >
                <option value="None"></option>
                <option value="Jain">Jain</option>
                <option value="Veg">Veg</option>
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor={`photo${index}`}
                className="block text-sm font-medium"
              >
                Photograph:
              </label>
              <input
                type="file"
                id={`photo${index}`}
                name={`photo${index}`}
                accept="image/*"
                onChange={(e) =>
                  handleParticipantChange(index, "photo", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor={`id${index}`}
                className="block text-sm font-medium"
              >
                College Id:
              </label>
              <input
                type="file"
                id={`id${index}`}
                name={`id${index}`}
                accept="image/*"
                onChange={(e) =>
                  handleParticipantChange(index, "id", e.target.value)
                }
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
           {index != 0? <button
                type="button"
                onClick={() => handleRemoveParticipant(index)}
                className="px-4 py-2 mt-2 bg-red-500 text-white rounded-lg"
              >
                Remove Participant
            </button> : <></>}
          </div>
        ))}
        {participants.length < MAX_PARTICIPANTS && (
          <button
            type="button"
            onClick={handleAddParticipant}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Participant
          </button>
        )}
        <button
           onClick={handleSubmit}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
        >
            Submit
        </button>
      </form>
    </div>
    </>
    
  );
};

export default Home;
