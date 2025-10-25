import type { User } from "../../types"

type UserCardProps = User

export function UserCard({name,email}:UserCardProps){
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}