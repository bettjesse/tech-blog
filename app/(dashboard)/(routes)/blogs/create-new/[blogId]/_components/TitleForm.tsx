"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import toast from "react-hot-toast"
interface TitleFormProps {
    initialData :{
        title:string
    },
    
    blogId: string
}

const formSchema = z.object({
    title: z.string().min(4,{
        message: "Title is required and should be atleast 4 characters long"
    })
})
const TitleForm = ({initialData,blogId}: TitleFormProps) => {
    const [isEditing,setIsEditing]= useState(false)
    const router = useRouter()
    const toggleEdit = ()=>   setIsEditing((current)=> !current)
    const form = useForm<z.infer <typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues:initialData
    })
    const {isSubmitting,isValid}= form.formState
    const onSubmit = async(values:z.infer <typeof formSchema>)=>{

        try {
            await axios.patch(`/api/blogs/${blogId}`, values)
            toast.success("Blog updated successfuly")
            toggleEdit()
            router.refresh()
        } catch {
            toast.error("something went wrong")
        }

    }
  return (
    <div className=" mt-6 border bg-slate-100 rounded-md p-4">
        <div className=" font-medium flex items-center justify-between">
      Blog Title
      <Button onClick={toggleEdit} variant= "ghost">
        {isEditing ? (
            <>cancel</>
        ): (
            <Pencil className=" h-4 w-4 mr-2" />
        )}
      
      </Button>
        </div>
        {!isEditing &&(
            <p className=" text-sm mt-2">
                {initialData.title}
            </p>
        )}
        {isEditing && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-4 mt-4"
                
                >
                    <FormField
                    control={form.control}
                    name="title"
                    render={({field})=> (
                        <FormItem>
                            <FormControl>
                                <Input
                                disabled={isSubmitting}
                                placeholder="Creating forms using React hook form with typescript"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    
                    />
                    <div className=" flex items-center gap-x-2">
                        <Button  className="bg-orange-400"
                        disabled ={!isValid  || isSubmitting} 
                        type="submit"
                        >
                            save 
                        </Button>
                       
                    </div>

                </form>

            </Form>
        )}
        </div>
  )
}

export default TitleForm