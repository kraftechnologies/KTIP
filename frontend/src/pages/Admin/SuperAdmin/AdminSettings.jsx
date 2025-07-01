import React, { useState } from 'react';
import SuperAdminLayout from './Layout.jsx';
import { Shield, Key, Globe, Bell } from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    ssoEnabled: false,
    mfaRequired: true,
    passwordPolicy: 'strong',
    sessionTimeout: 30
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <SuperAdminLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">System Settings</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Shield className="text-[#7B2FF2] mr-2" size={24} />
              <h3 className="text-xl font-semibold">Security Settings</h3>
            </div>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.ssoEnabled}
                  onChange={(e) => setSettings({...settings, ssoEnabled: e.target.checked})}
                  className="mr-3"
                />
                Enable Single Sign-On (SSO)
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.mfaRequired}
                  onChange={(e) => setSettings({...settings, mfaRequired: e.target.checked})}
                  className="mr-3"
                />
                Require Multi-Factor Authentication
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Key className="text-[#7B2FF2] mr-2" size={24} />
              <h3 className="text-xl font-semibold">Password Policy</h3>
            </div>
            <select
              value={settings.passwordPolicy}
              onChange={(e) => setSettings({...settings, passwordPolicy: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="basic">Basic (8+ characters)</option>
              <option value="strong">Strong (12+ chars, mixed case, numbers)</option>
              <option value="complex">Complex (16+ chars, symbols required)</option>
            </select>
          </div>

          <button
            onClick={handleSave}
            className="bg-[#7B2FF2] text-white px-6 py-2 rounded-lg hover:bg-[#6B2FD2]"
          >
            Save Settings
          </button>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default AdminSettings;