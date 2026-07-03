import {
  House,
  CalendarDays,
  Lightbulb,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">

      <div className="logo">

        🌿

      </div>

      <NavLink to="/">

        <House size={22} />

      </NavLink>

      <NavLink to="/calendar">

        <CalendarDays size={22} />

      </NavLink>

      <NavLink to="/insights">

        <Lightbulb size={22} />

      </NavLink>

      <NavLink to="/settings">

        <Settings size={22} />

      </NavLink>

    </nav>
  );
}

export default Navigation;