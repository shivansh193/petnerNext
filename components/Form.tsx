import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/create-record', {
        name,
        email,
        description,
        date,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };





  return (
    <div className="flex flex-col md:flex-row bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">We Get you the perfect pet Partner!</h1>
        <p className="text-lg mb-4">
         Tell us about your requirement! Which breed of pet do you want? When do you want it and where do you want it, If your city is not mentioned in the menu, it is probably because we are not operational there yet! We are working to reach as many cities as we can! However, People from Bangalore, Gurgaon and Delhi can get one right now!
        </p>
      </div>
      <form className="flex-1 p-8 bg-white" onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            rows={parseInt("5")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <span className='text-gray-700'>Date</span>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
