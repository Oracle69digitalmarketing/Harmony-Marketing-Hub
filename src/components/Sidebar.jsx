import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Settings', path: '/settings' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-xl font-bold text-indigo-600">Harmony Hub</div>
      <nav className="mt-6 space-y-2">
        {navItems.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-6 py-3 rounded-l-full ${
              location.pathname === item.path
                ? 'bg-indigo-100 text-indigo-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
