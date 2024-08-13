import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

// const renderIcon = (Icon) => {
//     return <Icon sx={{ width: 10, height: 10 }} />;
// };


export const appointmentTableActions = [
    {
        label: "Play",
        icon: PlayArrowIcon,
        color: "primary.main"
    },
    {
        label: "Edit",
        icon: EditIcon,
        color: "info.main"
    },
    {
        label: "Cancel",
        icon: CloseIcon,
        color: "error.main"
    },
    {
        label: "Copy",
        icon: FolderCopyIcon,
        color: "success.main"
    },
]

export const consultationSubMenu = [
    {
        title: 'Current Appointment',
        // icon: icon(ArticleIcon),
        path: '/appointment/consultation/current-appointment',
    },
    {
        title: 'Job History',
        // icon: icon(PendingActionsIcon),
        path: '/appointment/consultation/job-history',
    },
    {
        title: 'Past Records',
        path: '/appointment/consultation/past-records',
    },
    {
        title: 'Task',
        // icon: icon(TaskIcon),
        path: '/appointment/task',
    },
]

