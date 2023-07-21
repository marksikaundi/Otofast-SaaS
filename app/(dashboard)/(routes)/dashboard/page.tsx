import { UserButton } from "@clerk/nextjs"

const DashboadPage = () => {
  return (
    <div>
      <p>Dashboard page (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboadPage
