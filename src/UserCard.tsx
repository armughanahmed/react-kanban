type UserCardProps = {
    id: number,
    name: string,
    email: string
}

export function UserCard({name,email}:UserCardProps){
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}