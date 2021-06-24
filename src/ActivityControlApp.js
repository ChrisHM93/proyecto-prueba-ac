import React from 'react'
import { LoginScreen } from './components/auth/LoginScreen'
import { CoordScreen } from './components/coordinador/CoordScreen'
import { ReportScreen } from './components/user/ReportScreen'
import { UserScreen } from './components/user/UserScreen'
import { ToogleButton } from './components/ui/ToogleButton'

export const ActivityControlApp = () => {
    return (
        <div>
            {/* <LoginScreen /> */}
            {/* <UserScreen /> */}
            {/* <ReportScreen /> */}
            <CoordScreen />
        </div>
    )
}
