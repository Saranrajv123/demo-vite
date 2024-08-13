import { Box } from "@mui/material";
import { HEADER, NAV, SIDEBAR } from './config-layout';
import { useResponsive } from '@hooks/use-responsive.js';
import { useContext } from 'react';
import { SubMenuContext } from '@context/SubMenuProvider.jsx';

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
    const lgUp = useResponsive('up', 'lg');
    const {showSubNav} = useContext(SubMenuContext);
  
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          py: `${HEADER.H_MOBILE + SPACING}px`,
          ...(lgUp && {
            px: 2,
            py: `${HEADER.H_DESKTOP + SPACING}px`,
            width: `calc(100% - ${NAV.WIDTH}px)`,
          }),
          ...sx,
        }}
        {...other}
      >
        {children}
      </Box>
    );
  }