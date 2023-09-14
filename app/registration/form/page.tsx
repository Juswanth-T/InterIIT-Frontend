'use client'
// pages/index.tsx
import { useState } from 'react';

const MAX_PARTICIPANTS = 8;

const Home: React.FC = () => {
  const [participants, setParticipants] = useState<any[]>([
    { name: '', email: '', college: '' },
  ]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleAddParticipant = () => {
    if (participants.length < MAX_PARTICIPANTS) {
      setParticipants([...participants, { name: '', email: '', college: '' }]);
    }
  };

  const handleParticipantChange = (index: number, field: string, value: string) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant, i) =>
        i === index ? { ...participant, [field]: value } : participant
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-semibold">Participant Form</h1>
      <form onSubmit={handleSubmit}>
        {participants.map((participant, index) => (
          <div key={index} className="mb-4 border rounded-lg p-4">
            <h2 className="text-lg font-semibold">Participant {index + 1}</h2>
            <div className="mb-2">
              <label htmlFor={`name${index}`} className="block text-sm font-medium">
                Name:
              </label>
              <input
                type="text"
                id={`name${index}`}
                name={`name${index}`}
                value={participant.name}
                onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`email${index}`} className="block text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                id={`email${index}`}
                name={`email${index}`}
                value={participant.email}
                onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`college${index}`} className="block text-sm font-medium">
                College Name:
              </label>
              <input
                type="text"
                id={`college${index}`}
                name={`college${index}`}
                value={participant.college}
                onChange={(e) => handleParticipantChange(index, 'college', e.target.value)}
                className="px-4 py-2 mt-1 border rounded-lg"
                required
              />
            </div>
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
        <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>

      {isPreviewOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Participant Details</h2>
            {participants.map((participant, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">Participant {index + 1}</h3>
                <p>Name: {participant.name}</p>
                <p>Email: {participant.email}</p>
                <p>College Name: {participant.college}</p>
              </div>
            ))}
            <button
              onClick={closePreview}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
