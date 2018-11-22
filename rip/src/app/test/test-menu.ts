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
    title: 'Module Dicom',
    icon: 'nb-star',
    children: [
      {
        title: 'Dicom Viewer',
        link: '/app/dicom',
      },
    ],
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
        title: 'Accordion',
        link: '/app/features/accordion',
      },
      {
        title: 'Alert',
        link: '/app/features/alert',
      },
      {
        title: 'Buttons',
        link: '/app/features/buttons',
      },
      {
        title: 'Calendar',
        link: '/app/features/calendar',
      },
      {
        title: 'Calendar Kit',
        link: '/app/features/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/app/features/chat',
      },
      {
        title: 'Datepicker',
        link: '/app/features/datepicker',
      },
      {
        title: 'Select',
        link: '/app/features/select',
      },
      {
        title: 'Form Inputs',
        link: '/app/features/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/app/features/layouts',
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
        title: 'Infinite List',
        link: '/app/features/infinite-list',
      },
      {
        title: 'List',
        link: '/app/features/list',
      },
      {
        title: 'Modals',
        link: '/app/features/modals',
      },
      {
        title: 'Notifications',
        link: '/app/features/notifications',
      },
      {
        title: 'Popovers',
        link: '/app/features/popovers',
      },
      {
        title: 'Progress Bar',
        link: '/app/features/progress-bar',
      },
      {
        title: 'Animated Searches',
        link: '/app/features/search-fields',
      },
      {
        title: 'Spinner',
        link: '/app/features/spinner',
      },
      {
        title: 'Stepper',
        link: '/app/features/stepper',
      },
      {
        title: 'Tabs',
        link: '/app/features/tabs',
      },
      {
        title: 'Tree',
        link: '/app/features/tree',
      },
      {
        title: 'Typography',
        link: '/app/features/typography',
      }
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
  {
    title: 'Module Modals',
    icon: 'nb-gear',
    children: [
      {
        title: 'Dialog',
        link: '/app/modals/dialog',
      },
      {
        title: 'Window',
        link: '/app/modals/window',
      },
      {
        title: 'Popover',
        link: '/app/modals/popover',
      },
      {
        title: 'Tooltip',
        link: '/app/modals/tooltip',
      },
      {
        title: 'Toastr',
        link: '/app/modals/toastr',
      },
    ],
  },
];
