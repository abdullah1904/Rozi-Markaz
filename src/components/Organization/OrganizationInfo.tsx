import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {
  user: {
    name: string;
    email: string;
  },
  organization: {
    name: string,
    imageUrl: string | null;
  }
}

const OrganizationInfo = ({ user, organization }: Props) => {
    return (
        <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className="rounded-lg size-8">
                <AvatarImage src={organization.imageUrl ?? undefined} alt={organization.name} />
                <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                    {organization.name.split(" ").slice(0, 2).map(str => str[0]).join("")}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{organization.name}</span>
                <span className="truncate text-xs">{user.email}</span>
            </div>
        </div>
    )
}

export default OrganizationInfo