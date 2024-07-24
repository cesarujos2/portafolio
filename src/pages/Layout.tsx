import { Outlet } from 'react-router-dom';
import { Navigator } from '../components/Navigator';
import useTheme from '../hooks/useTheme';

const Layout = ({ menuItems }: { menuItems: string[] }) => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col min-h-screen ${theme == "dark" ? "galaxy-background" : ''}`}>
      <Navigator menuItems={menuItems} />
      <div className="w-full flex-1 flex">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
