'use client'
import { useState } from 'react';

const Home: React.FC = () => {
  const [numParticipants, setNumParticipants] = useState<number | null>(null);
  const [participants, setParticipants] = useState<any[]>([]);

  const handleNumParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setNumParticipants(num >= 0 ? num : null);
    setParticipants(Array.from({ length: num }, () => ({ name: '', email: '', college: '' })));
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
    console.log('Participant Details:', participants);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-semibold">Participant Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="numParticipants" className="block text-sm font-medium">
            Number of Participants:
          </label>
          <input
            type="number"
            id="numParticipants"
            name="numParticipants"
            value={numParticipants ?? ''}
            onChange={handleNumParticipantsChange}
            className="px-4 py-2 mt-2 border rounded-lg"
          />
        </div>
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
        <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
