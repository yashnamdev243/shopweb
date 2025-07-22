import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="text-xl font-bold text-orange-600">🕉️ Namdev Shivling Arts</Link>
        <Menu mode="horizontal" selectedKeys={[pathname]} className="border-none" theme="light">
          <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/about"><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="/products"><Link to="/products">Products</Link></Menu.Item>
          <Menu.Item key="/contact"><Link to="/contact">Contact</Link></Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
