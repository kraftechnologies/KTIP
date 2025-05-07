// components/TeamMemberCard.tsx
import React from 'react';
import { Linkedin } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {member.name}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
    <div className="flex space-x-4">
      <a
        href={`mailto:${member.email}`}
        className="text-[#18cb96] hover:underline text-sm"
      >
        {member.email}
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#18cb96]"
        aria-label={`LinkedIn profile of ${member.name}`}
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
);

export default TeamMemberCard;
