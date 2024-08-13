import SvgColor from "../components/svgColor";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ArticleIcon from '@mui/icons-material/Article';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import GroupIcon from '@mui/icons-material/Group';
import Groups2Icon from '@mui/icons-material/Groups2';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const icon = (Icon) => (
  // <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
    <Icon sx={{ width: 24, height: 24 }} />
);

const navConfig = [
  {
    title: 'Appointment',
    // path: '/',
    icon: icon(CalendarMonthIcon),
    children: [
      {
        title: 'Appointment List',
        icon: icon(ArticleIcon),
        path: '/appointment/appointment-list',
      },
      {
        title: 'Counselling',
        icon: icon(PendingActionsIcon),
        path: '/appointment/counselling',
      },
      {
        title: 'New',
        path: '/appointment/new-appointment',
      },
      {
        title: 'Task',
        icon: icon(TaskIcon),
        path: '/appointment/task',
      },
      {
        title: 'Approved Management System',
        icon: icon(AssignmentIcon),
        path: '/appointment/approve-management-system',
      },
      {
        title: 'Health Surveillance',
        path: '/appointment/health-surveillance',
      },
      {
        title: "Clinicial letter form",
        path: "/appointment/clinicial-letter-form"
      }

    ],
  },
  {
    title: 'Calendar',
    path: '/',
    icon: icon(CalendarMonthIcon),
  },
  {
    title: 'To Book',
    // path: '/to-book',
    icon: icon(BookOnlineIcon),
    children: [
      {
        title: "Health Surveillance",
        path: "/to-book/health-surveillance",
        icon: icon(MedicalInformationIcon)
      },
      {
        title: "Follow up",
        path: "/to-book/follow-up",
        icon: icon(FollowTheSignsIcon)
      },
      {
        title: "Referral",
        path: "/to-book/referral",
        icon: icon(GroupIcon)
      },
      {
        title: "Management Referral",
        path: "/to-book/management-referral",
        icon: icon(Groups2Icon)
      }
    ]
  },
  {
    title: 'Patients',
    path: '/patients',
    icon: icon(AssignmentIndIcon),
  },
  {
    title: 'Settings',
    icon: icon(SettingsSuggestIcon),
    children: [
      {
        title: 'Form Builder',
        path: '/settings/from-builder',
      },
      {
        title: 'forms',
        path: '/settings/froms',
      },
      {
        title: 'Packages',
        path: '/settings/packages',
      },
      {
        title: 'Vat Master',
        path: '/settings/vat-master',
      },
      {
        title: "Add What's new",
        path: '/settings/whats-new',
      },
      {
        title: 'Ifit Package config',
        path: '/settings/ifit-package-config',
      },
      {
        title: 'Ifit Clinic config',
        path: '/settings/ifit-clinic-config',
      },
      // {
      //   title: 'forms',
      //   path: '/settings/froms',
      // },
    ],
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   // icon: icon('ic_disabled'),
  // },
];

export default navConfig;