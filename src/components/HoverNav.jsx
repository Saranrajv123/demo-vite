import { useEffect, useState } from 'react';
import {
    Box, Stack, Drawer, Button, Avatar, Typography,
    ListItemButton, Collapse, List
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { RouterLink } from '../routes/RouterLink';
import { useResponsive } from '../hooks/use-responsive';
import { account } from '../_mock/account';
import Logo from '../components/logo';

export default function Nav({ openNav, onCloseNav, navConfig }) {
    const [openItem, setOpenItem] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const { pathname } = useLocation();
    const upLg = useResponsive('up', 'lg');

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
    }, [pathname, openNav, onCloseNav]);

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
        <Stack component="nav" spacing={0.5} sx={{ px: 1, mt: 5 }}>
            {navConfig.map((item) => (
                <NavItem
                    key={item.title}
                    item={item}
                    openItem={openItem}
                    onToggle={handleToggle}
                    isHovered={isHovered}
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
        <>
            <Logo sx={{ mt: 3, ml: 2 }} />
            {/* {renderAccount} */}
            {renderMenu}
            <Box sx={{ flexGrow: 1 }} />
            {/* {renderUpgrade} */}
        </>
    );

    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: isHovered ? 240 : 72,
                transition: 'width 0.3s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {upLg ? (
                <Box
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: isHovered ? 240 : 72,
                        transition: 'width 0.3s',
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
                            width: isHovered ? 240 : 72,
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
}

function NavItem({ item, openItem, onToggle, isHovered }) {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const isCurrentItemOpen = isHovered && openItem === item?.title;
        setIsOpen(isCurrentItemOpen);
    }, [isHovered, openItem, item]);

    const active = item.path === pathname;

    const handleClick = () => {
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
                    <Box component={'span'} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                            {item?.icon}
                        </Box>
                        {isHovered && <Box component="span">{item?.title}</Box>}
                    </Box>
                    {isHovered ? (isOpen ? <ExpandLess /> : <ExpandMore />) : null}
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
                                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                        '&:hover': {
                                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                                        },
                                    }),
                                }}
                            >
                                <Box component={'span'} sx={{ display: 'flex', alignItems: 'center' }}>
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
            {isHovered && <Box component="span">{item?.title}</Box>}
        </ListItemButton>
    );
}
