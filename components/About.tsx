import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to our Pet Date Services
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We offer a unique opportunity for you to spend quality time with a
          furry friend without the long-term commitment. Our temporary pet
          services offer the chance to take one of our furry friends on a date
          to the park, beach, or wherever your heart desires. We currently have
          a range of breeds available for you to choose from, including Golden
          Retrievers, Indies, Shih Tzus, and Labradors.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          All of our pets are carefully selected and come from reputable
          breeders or are rescued from NGOs. We take great care in ensuring that
          our pets are well-trained, well-behaved, and well-loved before they go
          out on a date with you. Our team is dedicated to providing the best
          possible experience for both you and our furry friends.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our services are perfect for anyone who wants to experience the joy of
          having a pet without the long-term responsibility. Whether you&apos;re
          looking for a fun day out or simply want to cuddle up with a furry
          friend, we have the perfect pet for you.
        </p>
        <p className="text-gray-700 text-lg">
          Thank you for considering our pet date services for your next outing.
          We can&apos;t wait to help you create lasting memories with our furry
          friends.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
