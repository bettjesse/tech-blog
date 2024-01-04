
interface BlogLayoutProps {
    children : React.ReactNode
}
const BlogLayout = ({children}: BlogLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default BlogLayout