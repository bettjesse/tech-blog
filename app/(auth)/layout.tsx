
interface AuthlayoutProps{
    children : React.ReactNode
}
const Authlayout = ({children}:AuthlayoutProps)=> {
  return (
    <div className="h-full flex items-center justify-center">
        {children}</div>
  )
}

export default Authlayout


