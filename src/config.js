import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EmailIcon from '@material-ui/icons/Email';
import ExtensionIcon from '@material-ui/icons/Extension';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssesmentIcon from '@material-ui/icons/Assessment';
import RegionsIcon from '@material-ui/icons/Map'
import PerformanceIcon from '@material-ui/icons/ShowChart'
import GasIcon from '@material-ui/icons/LocalGasStation'


import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};

export const menuItems = [
  {
    title: 'GERENCIA VIRTUAL',
    type: 'header'
  },

  {
    title: 'Comportamiento',
    href: '/',
    icon: <AssesmentIcon style={iconStyle} />
  }, {
    title: 'Regiones',
    href: '/dashboards/ecommerce',
    icon: <RegionsIcon style={iconStyle} />
  }, {
    title: 'Administración de proyectos',
    href: '/dashboards/project',
    icon: <DashboardIcon style={iconStyle} />
  },
  {
    title: 'Rendimiento',
    href: '/dashboards/crypto',
    icon: <PerformanceIcon style={iconStyle} />
  },
  {
    title: 'Gerentes regionales',
    href: '/apps/maps',
    icon: <GasIcon style={iconStyle} />
  },
  {
    title: 'HERRAMIENTAS',
    type: 'header'
  },


  {
    title: 'Calendario',
    href: '/apps/calendar',
    icon: <DateRangeIcon style={iconStyle} />
  }, {
    title: 'Notas',
    href: '/apps/notes',
    icon: <EventNoteIcon style={iconStyle} />
  }, {
    title: 'Chat',
    href: '/apps/chat',
    icon: <ChatIcon style={iconStyle} />
  }

];
