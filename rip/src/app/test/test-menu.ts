import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/app/dashboard',
    home: true,
  },
  {
    title: 'MODULES',
    group: true,
  },
  {
    title: 'Module Features',
    icon: 'nb-keypad',
    link: '/app/features',
    children: [
      {
        title: 'Features',
        link: '/app/features',
      },
      {
        title: 'Buttons',
        link: '/app/features/buttons',
      },
      {
        title: 'Grid',
        link: '/app/features/grid',
      },
      {
        title: 'Icons',
        link: '/app/features/icons',
      },
      {
        title: 'Modals',
        link: '/app/features/modals',
      },
      {
        title: 'Popovers',
        link: '/app/features/popovers',
      },
      {
        title: 'Typography',
        link: '/app/features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/app/features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/app/features/tabs',
      },
      {
        title: 'Tree',
        link: '/app/features/tree',
      }, {
        title: 'Notifications',
        link: '/app/features/notifications',
      },
      {
        title: 'Form Inputs',
        link: '/app/features/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/app/features/layouts',
      },
    ],
  },
  {
    title: 'Module Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/app/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/app/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/app/charts/d3',
      },
    ],
  },
  {
    title: 'Module Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/app/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/app/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/app/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/app/maps/searchmap',
      },
    ],
  },
  {
    title: 'Module Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/app/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/app/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Module Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/app/tables/smart-table',
      },
    ],
  },
];
