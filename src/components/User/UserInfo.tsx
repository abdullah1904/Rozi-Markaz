import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {
    name: string;
    email: string;
    imageUrl?: string;
}

const UserInfo = ({ name, email, imageUrl }: Props) => {
    return (
        <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className="rounded-lg size-8">
                <AvatarImage src={imageUrl} alt={name} />
                <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                    {name.split(" ").slice(0, 2).map(str => str[0]).join("")}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
            </div>
        </div>
    )
}

export default UserInfo