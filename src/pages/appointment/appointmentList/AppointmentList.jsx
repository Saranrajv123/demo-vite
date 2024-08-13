import {
    ListItem,
    ListItemIcon,
    Paper,
    Popover,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { userMockData } from '@utils/dummy/userMockData.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from 'react';
import { appointmentTableActions } from '@utils/utils.js';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { SubMenuContext } from '@context/SubMenuProvider.jsx';

function AppointmentList() {

    const [showActions, setShowActions] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const {setShowSubNav} = useContext(SubMenuContext);

    console.log('userMockata ', userMockData[0]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleAction = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleActions = (data) => {
        console.log('data ', data);
        setShowSubNav(true);
        setAnchorEl(null);

    };

    const renderHeader = () => {
        return Object.keys(userMockData[0]).map((key) => (
            <>
                <TableCell key={key}>
                    {key}
                </TableCell>
            </>
        ));
    };

    const renderIcon = (Icon, color) => {
        return <Icon sx={{ width: '20px', height: '20px', color: color }} />;
    };

    return (
        <>
            <TableContainer
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {renderHeader()}
                            <TableCell
                                // sx={{
                                //     backgroundColor: 'common.white',
                                //     color: 'common.black',
                                //     fontWeight: 'fontWeightSemiBold',
                                //     textTransform: 'capitalize',
                                // }}
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {userMockData.map(user => {
                            return (
                                <TableRow
                                    key={user?.id}
                                    hover
                                >
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.address?.street}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <MoreVertIcon onClick={handleAction} />
                                    </TableCell>

                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <List>
                                            {appointmentTableActions?.map((action) => (
                                                <ListItem key={action.label} disablePadding>
                                                    <ListItemButton
                                                        onClick={() => handleActions(action?.label)}
                                                    >
                                                        <ListItemIcon sx={{ minWidth: "35px", width: "20px", height: "20px" }}>
                                                            {renderIcon(action?.icon.type, action?.color)}
                                                        </ListItemIcon>
                                                        <Typography
                                                            component={'span'}
                                                            variant="caption"
                                                            minWidth={40}
                                                        >
                                                            {action?.label}
                                                        </Typography>
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Popover>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    );
}

export default AppointmentList;