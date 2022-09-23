import { TbHome, TbBriefcase, TbSettings, TbCalendar } from "react-icons/tb";
import { RiBarChartBoxLine, RiChat3Line } from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/app/dashboard",
    icon: <TbHome />,
  },
  {
    title: "Courses",
    path: "/app/courses",
    icon: <TbBriefcase />,
  },
  {
    title: "Chat",
    path: "/app/chat",
    icon: <RiChat3Line />,
  },
  {
    title: "Grades",
    path: "/app/grades",
    icon: <RiBarChartBoxLine />,
  },
  {
    title: "Schedule",
    path: "/app/schedule",
    icon: <TbCalendar />,
  },
  {
    title: "Settings",
    path: "/app/settings",
    icon: <TbSettings />,
  },
];
