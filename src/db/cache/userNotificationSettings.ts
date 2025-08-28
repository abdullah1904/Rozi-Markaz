import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export const getUserNotificationSettingsGlobalTag = () => {
    return getGlobalTag('userNotificationSettings')
}

export const getUserNotificationSettingsIdTag = (id: string) => {
    return getIdTag('userNotificationSettings', id)
}

export const revalidateUserNotificationSettingsCache = (id: string) => {
    revalidateTag(getUserNotificationSettingsGlobalTag())
    revalidateTag(getUserNotificationSettingsIdTag(id))
}