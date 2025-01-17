import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import { LogOut, User } from 'lucide-react'

export function TemplatePrivateRoute() {

    const { user, signOut } = useAuth()

    return user ? (
        <div>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className="container max-auto">
                    <a className="navbar-brand" href="#">LAB365 - DASHBOARD</a>
                </div>

                <div>
                    <span className='text-secondary'><User size={16}/>{user.email}</span>
                    <button className=' btn btn-dark' onClick={signOut}>
                        <LogOut size={16} />
                    </button>

                </div>
            </nav>
            <main className='container mx-auto'>
                <Outlet />
            </main>
        </div>
    ) : <Navigate to="/" />
}