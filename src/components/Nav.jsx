import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from '../routes/RouterLink';
import { useResponsive } from '../hooks/use-responsive';
import { account } from '../_mock/account';
import Logo from '../components/logo';
import Scrollbar from '../components/scrollbar';
import { NAV, SIDEBAR } from '../layout/config-layout';
import { useLocation } from 'react-router-dom';
import { Collapse } from '@mui/material';
import List from '@mui/material/List';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Nav({ openNav, onCloseNav, navConfig }) {

    const [openItem, setOpenItem] = useState(null);

    const { pathname } = useLocation();
    const upLg = useResponsive('up', 'lg');

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }

        // setOpenItem(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleToggle = (title) => {
        setOpenItem(prev => (prev === title ? null : title));
    };

    const renderAccount = (
        <Box
            sx={{
                my: 3,
                mx: 2.5,
                py: 2,
                px: 2.5,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
            }}
        >
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2">{account.displayName}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {account.role}
                </Typography>
            </Box>
        </Box>
    );

    const renderMenu = (
        <Stack component="nav" spacing={0.5} sx={{ px: 2, mt: 5 }}>
            {navConfig.map((item) => (
                <NavItem
                    key={item.title}
                    item={item}
                    openItem={openItem}
                    onToggle={() => handleToggle(item?.title)}

                />
            ))}
        </Stack>
    );

    const renderUpgrade = (
        <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
            <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                <Box
                    component="img"
                    src="/assets/illustrations/illustration_avatar.png"
                    sx={{ width: 100, position: 'absolute', top: -50 }}
                />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">Get more?</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                        From only $69
                    </Typography>
                </Box>

                <Button
                    href="https://material-ui.com/store/items/minimal-dashboard/"
                    target="_blank"
                    variant="contained"
                    color="inherit"
                >
                    Upgrade to Pro
                </Button>
            </Stack>
        </Box>
    );

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <Logo sx={{ mt: 3, ml: 4 }} />

            {/* {renderAccount} */}

            {renderMenu}

            <Box sx={{ flexGrow: 1 }} />

            {/* {renderUpgrade} */}
        </Scrollbar>
    );

    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.WIDTH },
            }}
        >
            {upLg ? (
                <Box
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: SIDEBAR.WIDTH,
                        // width: NAV.WIDTH,
                        borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
                    }}
                >
                    {renderContent}
                </Box>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    PaperProps={{
                        sx: {
                            // width: NAV.WIDTH,
                            width: SIDEBAR.WIDTH,
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
}


function NavItem({ item, openItem, onToggle }) {
    const { pathname } = useLocation();
    // const [open, setOpen] = useState(false);


    const active = item.path === pathname;
    const isOpen = openItem === item?.title;


    const handleClick = () => {
        // setOpen(prev => !prev);
        if (item?.children) {
            onToggle(item?.title);
        } else {
            onToggle(null);
        }
    };

    if (item?.children) {
        return (
            <>
                <ListItemButton
                    onClick={handleClick}
                    sx={{
                        minHeight: 44,
                        borderRadius: 0.75,
                        typography: 'body2',
                        color: 'text.secondary',
                        textTransform: 'capitalize',
                        fontWeight: 'fontWeightMedium',
                        fontFamily: 'system-ui',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        ...(active && {
                            color: 'primary.main',
                            fontWeight: 'fontWeightSemiBold',
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                            '&:hover': {
                                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                            },
                        }),
                    }}>
                    <Box component={'span'}
                         sx={{
                             display: 'flex',
                             alignItems: 'center',
                         }}
                    >
                        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                            {item?.icon}
                        </Box>
                        <Box component="span">{item?.title}</Box>
                    </Box>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item?.children?.map((subItem) => (
                            <ListItemButton
                                key={subItem.title}
                                component={RouterLink}
                                href={subItem.path}
                                sx={{
                                    minHeight: 44,
                                    pl: 3,
                                    borderRadius: 0.75,
                                    typography: 'body2',
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    fontWeight: 'fontWeightMedium',
                                    fontFamily: 'system-ui',
                                    ...(subItem.path === pathname && {
                                        color: 'primary.main',
                                        // fontWeight: 'fontWeightSemiBold',
                                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                        '&:hover': {
                                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                                        },
                                    }),
                                }}
                            >
                                {/*<ListItemText primary={subItem.title} />*/}
                                {/*<Box component="span">{subItem?.title}</Box>*/}
                                <Box component={'span'}
                                     sx={{
                                         display: 'flex',
                                         alignItems: 'center',
                                     }}
                                >
                                    <Box component="span" sx={{ width: 20, height: 20, mr: 2 }}>
                                        {subItem?.icon}
                                    </Box>
                                    <Box component="span">{subItem?.title}</Box>
                                </Box>

                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </>
        );
    }

    return (
        <ListItemButton
            component={RouterLink}
            href={item.path}
            sx={{
                minHeight: 44,
                borderRadius: 0.75,
                typography: 'body2',
                color: 'text.secondary',
                textTransform: 'capitalize',
                fontWeight: 'fontWeightMedium',
                fontFamily: 'system-ui',
                ...(active && {
                    color: 'primary.main',
                    fontWeight: 'fontWeightSemiBold',
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                    },
                }),
            }}
        >
            <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                {item.icon}
            </Box>

            <Box component="span">{item.title} </Box>
        </ListItemButton>
    );
}
