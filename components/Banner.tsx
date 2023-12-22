import { AlertTriangle,  CheckCircleIcon} from "lucide-react"
import { cva,  type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const bannerVariants  = cva(
    "border text-sm w-full p-4 text-center flex items-center",
        {
            variants :{
                variant :{
                        success: "bg-green-700 border-green-800 text-secondary",
                        warning : " bg-orange-200/80 border-orange-50 text-primary"
                },
            },
            defaultVariants:{
                variant:"warning"
            } 
        }
)

const IconMap ={
    warning: AlertTriangle,
    success: CheckCircleIcon
}
interface BannerProps extends VariantProps <typeof bannerVariants> {
    label :string
}
const Banner = ({
    label, variant
}: BannerProps) => {

const Icon = IconMap[variant ||"warning"] 
  return (
    <div className={ cn(bannerVariants({variant}))}>
<Icon className=" w-4 h-4 mr-2"/>
{label}
    </div>
    
  )
}

export default Banner