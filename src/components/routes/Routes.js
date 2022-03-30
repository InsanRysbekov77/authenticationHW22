import React from 'react'
import Layout from '../Layout/Layout'
import { authContext } from '../../store/authContext'
import { useContext } from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import AuthPage from '../../pages/AuthPage'
import ProfilePage from '../../pages/ProfilePage'
import PrivatRoute from './PrivatRoute'

const AppRoutes = () => {
	const { isLoggedIn } = useContext(authContext)
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<PrivatRoute
					component={<AuthPage />}
					when={!isLoggedIn}
					to={'/'}
					path={'/auth'}
				/>
				<PrivatRoute
					component={<ProfilePage />}
					when={isLoggedIn}
					to={'/'}
					path={'/profile'}
				/>
			</Switch>
		</Layout>
	)
}
export default AppRoutes;