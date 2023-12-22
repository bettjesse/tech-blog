"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTrigger,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"




interface ConfirmModalProps {
    children: React.ReactNode
   onConfirm : ()=> void
}

const ConfirmModal = ({children,onConfirm}: ConfirmModalProps) => {
  return (
   <AlertDialog>
    <AlertDialogTrigger asChild>
        {children}
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>
                Are you sure
            </AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone 
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>
                cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
   </AlertDialog>
  )
}

export default  ConfirmModal