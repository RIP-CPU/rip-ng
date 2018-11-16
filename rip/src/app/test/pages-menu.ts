import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/test/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/test/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/test/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/test/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/test/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/test/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/test/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/test/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/test/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/test/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/test/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/test/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/test/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/test/components/tree',
      }, {
        title: 'Notifications',
        link: '/test/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/test/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/test/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/test/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/test/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/test/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/test/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/test/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/test/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/test/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/test/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/test/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Latihan',
    icon: 'nb-shuffle',
    children: [
      {
        title: 'Day 1',
        link: '/test/latihan/day-one',
      },
      {
        title: 'Day 2',
        link: '/test/latihan/day-two',
      },
      {
        title: 'Day 3',
        link: '/test/latihan/day-three',
      },
    ],
  },
];
