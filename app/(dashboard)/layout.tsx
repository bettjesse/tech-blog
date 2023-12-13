import Sidebar from "./_components/Sidebar"

interface DashboardLayoutProps {
    children : React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
    <div className=" h-full">
        <div className=" hidden md:flex w-56 flex-col fixed inset-y-0 z-50">
         <Sidebar/>
        </div>
        
        {children}
        </div>
  )
}

export default DashboardLayout