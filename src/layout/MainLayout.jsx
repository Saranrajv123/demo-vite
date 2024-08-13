import { Box } from '@mui/material';
import Header from '../components/Header.jsx';
import { useContext, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Main from './Main.jsx';
import { SubMenuContext } from '@context/SubMenuProvider.jsx';
import navConfig from './config-navigation.jsx';
import { consultationSubMenu } from '@utils/utils.js';
import HoverNav from '@components/HoverNav.jsx';

export default function MainLayout({ children }) {
    const [openNav, setOpenNav] = useState(false);
    const { showSubNav } = useContext(SubMenuContext);

    return (
        <>
            <Header onOpenNav={() => setOpenNav(true)} />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                {/*<Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} navConfig={navConfig} />*/}
                <HoverNav openNav={openNav} onCloseNav={() => setOpenNav(false)} navConfig={navConfig} />
                {showSubNav &&
                    <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} navConfig={consultationSubMenu} />}
                <Main>{children}</Main>
            </Box>
        </>
    );
}

