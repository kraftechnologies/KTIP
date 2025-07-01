import React from 'react';
import { Construction } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConstructionPage = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  
  // Determine if this is an admin page
  const isAdminPage = currentPath.includes('/admin');
  
  // Determine appropriate return path
  const returnPath = isAdminPage ? '/admin/super' : '/';
  const returnText = isAdminPage ? 'Return to Admin Dashboard' : 'Go Home';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Construction className="w-24 h-24 text-[#7B2FF2] mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you this feature. Please check back soon!
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate(returnPath)}
            className="bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] text-white px-6 py-3 rounded-md font-medium hover:from-[#5F1EDC] hover:to-[#1CA7EC] transition-all"
          >
            {returnText}
          </button>
          {isAdminPage && (
            <p className="text-sm text-gray-500 mt-2">
              This admin feature is currently being developed. Please use the available admin pages in the meantime.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;