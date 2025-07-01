import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-[#e0d7f8]">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#7B2FF2]"
    />
    <h3 className="text-lg font-semibold text-[#7B2FF2]">
      {member.name}
    </h3>
    <p className="text-gray-600 mb-4">{member.role}</p>
    <div className="flex space-x-4">
      <a
        href={`mailto:${member.email}`}
        className="text-[#7B2FF2] hover:underline text-sm"
      >
        {member.email}
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#7B2FF2]"
        aria-label={`LinkedIn profile of ${member.name}`}
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
);

export default TeamMemberCard;