import { Outlet, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';


import MainLayout from '../layout/MainLayout.jsx';
import Login from '@pages/login/Login.jsx';
import Calendar from '@pages/calendar/Calendar.jsx';
import AppointmentList from '@pages/appointment/appointmentList/AppointmentList.jsx';
import Patients from '@pages/patients/Patients.jsx';
import { SubMenuProvider } from '@context/SubMenuProvider.jsx';


export default function Routes() {
    const routes = useRoutes([
        {
            element: (
                <SubMenuProvider>
                    <MainLayout>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </MainLayout>
                </SubMenuProvider>
            ),
            path: '/',
            children: [
                {
                    // element: <RequiredAuth allowedRoles={[ROLES.Admin]} />,
                    children: [
                        { element: <Calendar />, index: true },
                        { element: <AppointmentList />, path: 'appointment/appointment-list' },
                        { element: <Patients />, path: 'patients' },

                    ],
                },

            ],
        },
        { element: <Login />, path: '/login' },
    ]);

    return routes;
}