"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { activities, ActivityItem } from "../../../data/activities"
import ActivityPage from "@/components/activities/ActivityPage"

const ActivityDetail = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const id = pathname.split("/").pop()

  const activity: ActivityItem | undefined = activities.find(
    (act) => act.id === id
  )

  if (!activity) {
    return <div>Activity not found</div>
  }

  return <ActivityPage activity={activity} />
}

export default ActivityDetail
