import Logo from "./Logo"
import SidebarRoute from "./SidebarRoute"

 const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
<div className="p-6">
<Logo/>
</div>
<div className=" flex flex-col w-full">
<SidebarRoute/>
</div>
    
    </div>
  )
}

export default Sidebar