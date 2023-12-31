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

import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Blog } from "@prisma/client"
import { Combobox } from "@/components/ui/combobox"
interface CategoriesFormProps {
    initialData : Blog
    
    
    blogId: string
    options: {label: string, value:string}[]
}

const formSchema = z.object({
    categoryId: z.string().min(1)
})
const CategoriesForm = ({initialData,blogId, options}: CategoriesFormProps) => {
    const [isEditing,setIsEditing]= useState(false)
    const router = useRouter()
    const toggleEdit = ()=>   setIsEditing((current)=> !current)
    const form = useForm<z.infer <typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues:{
            categoryId: initialData.categoryId ||  ""  
          }
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

    const selectedOption =  options.find((option)=> option.value=== initialData.categoryId)
  return (
    <div className=" mt-6 border bg-slate-100 rounded-md p-4">
        <div className=" font-medium flex items-center justify-between">
      Blog category
      <Button onClick={toggleEdit} variant= "ghost">
        {isEditing ? (
            <>cancel</>
        ): (
            <Pencil className=" h-4 w-4 mr-2" />
        )}
      
      </Button>
        </div>
        {!isEditing &&(
            <p className={cn(
                "text-sm mt-2",
                !initialData.description && "text-slate-500 italic"
            )}>
                {selectedOption?.label || "No category" }
            </p>
        )}
        {isEditing && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-4 mt-4"
                
                >
                    <FormField
                    control={form.control}
                    name="categoryId"
                    render={({field})=> (
                        <FormItem>
                            <FormControl>
                               <Combobox
                               options = {options}
                              
                               {...field}
                               
                               />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    
                    />
                    <div className=" flex items-center gap-x-2">
                        <Button
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

export default CategoriesForm