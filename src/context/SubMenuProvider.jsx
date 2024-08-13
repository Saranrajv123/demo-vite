import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SubMenuContext = createContext(null);

export const SubMenuProvider = ({ children }) => {
    const [showSubNav, setShowSubNav] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        const check = pathname.split('/').includes('appointment');

        if (check === false) {
            setShowSubNav(false);
        }

    }, [pathname]);

    return (
        <SubMenuContext.Provider value={{ showSubNav, setShowSubNav }}>
            {children}
        </SubMenuContext.Provider>
    );
};