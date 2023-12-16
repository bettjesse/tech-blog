import { LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const backGroundVariants = cva(
    "rounded-full flex items-center justify-center",
     {
        variants:{
            variant:{
                default:"bg-sky-100",
                success: "bg-green-200"
            },
           
            size :{
                default: "p-2",
                small : "p-1"
            }
        },
        defaultVariants:{
            variant:"default",
            size: "default"
        }





})
const iconVariant = cva(
    "",
    {
        variants:{
            variant:{
                default: "text-sky-700",
                success: "text-green-700"
            },
            size :{
                default:"h-8 w-8",
                small: "h-4 w-4"
            }
        },
       defaultVariants:{
        variant:"default",
        size: "default"
       }
})

type BackgroundVariantProps = VariantProps<typeof backGroundVariants>
type IconVariantProps =VariantProps<typeof iconVariant>

interface IconBadgeProps extends BackgroundVariantProps, IconVariantProps
{
   icon:LucideIcon
}

const IconBadge = ({icon:Icon,size,variant}:IconBadgeProps)=>{

    return(
<div className= {cn(backGroundVariants({variant,size}))}>
        <Icon className= {cn(iconVariant({variant,size}))}/>
    </div>

    )
    

}
export default IconBadge