import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import LogIn from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgetPassword';
import VerificationCode from '../pages/auth/VerificationCode';
import SetNewPassword from '../pages/auth/SetNewPassword';
import Profile from '../pages/profile/Profile';
import Notification from '../pages/notification/Notification';
import PrivacyPolicy from '../pages/settings/privacy-policy/PrivacyPolicy';
import TermsAndCondition from '../pages/settings/terms-and-conditon/TermsAndCondition';
import PeopleManagement from '../pages/peopleManagement/PeopleManagement';
import AddNew from '../pages/peopleManagement/AddNew';
import EditPerson from '../pages/peopleManagement/EditPerson';
import ViewDetails from '../pages/peopleManagement/ViewDetails';
import Sectors from '../pages/Sectors/Sectors';
import About from '../pages/about/About';
import UpdatesPage from '../pages/Insights/Updates/UpdatesPage';
import EventsPage from '../pages/Insights/Events/EventsPage';
import Newsletters from '../pages/Insights/Newsletters/Newsletters';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/people-management",
                element: <PeopleManagement></PeopleManagement>,
            },
            {
                path: "/people-management/add-new",
                element: <AddNew></AddNew>,
            },
            {
                path: "/people-management/edit-person",
                element: <EditPerson></EditPerson>
            },
            {
                path: "/people-management/view-details",
                element: <ViewDetails></ViewDetails>
            },
            {
                path: "/sectors",
                element: <Sectors></Sectors>
            },
            {
                path: "/insights/updates",
                element: <UpdatesPage></UpdatesPage>
            },
            {
                path: "/insights/events",
                element: <EventsPage></EventsPage>
            },
            {
                path: "/insights/newsletters",
                element: <Newsletters></Newsletters>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/settings/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/settings/privacy-policy",
                element: <PrivacyPolicy></PrivacyPolicy>,
            },
            {
                path: "/settings/terms-and-condtion",
                element: <TermsAndCondition></TermsAndCondition>,
            },
            {
                path: "/notification",
                element: <Notification></Notification>,
            },
        ]
    },
    {
        path: "/auth/login",
        element: <LogIn></LogIn>,
    },
    {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "/auth/verification-code",
        element: <VerificationCode></VerificationCode>,
    },
    {
        path: "/auth/set-new-password",
        element: <SetNewPassword></SetNewPassword>,
    },

]);

export default router;