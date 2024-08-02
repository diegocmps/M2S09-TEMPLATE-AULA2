import { useAuth } from "../../../contexts/auth"

export function HomePage() {

    const {user} = useAuth()
    

    return (
        <div>
            <h1>Dashboard home page</h1>

            <h2>Bem Vindo {user.first_name} = {user.email}</h2>

        </div>
    )
}