import { useAuth } from '../../context/AuthContext';

const UserRightPanel = () => {
  const { userName } = useAuth();

  return (
    <div className="w-full md:w-64 bg-white rounded-xl shadow p-4">
      <div className="text-center mb-4">
        <img
          src="https://i.pravatar.cc/80?img=8"
          alt="Profile"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="font-semibold text-gray-800 mt-2">Good Morning {userName || 'User'}</h2>
        <p className="text-sm text-gray-500">Continue your journey and achieve your target</p>
      </div>

      <div className="h-24 bg-purple-100 rounded-lg mb-4"></div>

      <div>
        <h3 className="font-medium text-gray-700 mb-2">Your Mentor</h3>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={`https://i.pravatar.cc/40?img=${i}`} className="rounded-full w-8 h-8" />
              <span className="text-sm text-gray-700">Prashant Kumar</span>
            </div>
            <button className="text-xs text-purple-600 font-semibold">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRightPanel;
