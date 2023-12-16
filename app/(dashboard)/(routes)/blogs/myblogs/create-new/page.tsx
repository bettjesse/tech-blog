"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import  {useForm} from "react-hook-form"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"

import {
    FormControl,
    FormDescription,
    FormLabel,
    FormMessage,
    FormField,
    Form,
    FormItem
}from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import  Link from "next/link"


const formSchema = z.object({
    title: z.string().min(4,{
       message: "title is required minimun four characters"
    })
})

const CreateNew = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues :{
            title :""
        },
    })
    const router = useRouter()
    const {isSubmitting,isValid}= form.formState
    const onSubmit = async(values : z.infer<typeof formSchema>) => {

        try {

            const response = await axios.post("/api/blogs", values)
            router.push( `/blogs/myblogs/create-new/${response.data.id}`)
            toast.success("blog created")
        } catch {
           toast.error("something went wrong")
        }
      
      
    }
  return (
    <div className=" max-w-5xl  mx-auto flex md:items-center md:justify-center h-full p-6"> 
    <div className="">
        <h1 className="text-2xl">
           What&apos;s your Title ?
        </h1>
        <p className=" text-sm text-gray-900"> What would you like to have as your title ? ,You can change it later</p>
        <Form {...form}>
       <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8">
                <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Blog Title
                        </FormLabel>
                        <FormControl>
                            <Input
                            disabled= {isSubmitting}
                            placeholder="E.g Perfect User Experience:Forms in Front-End Design"
                            {...field}
                            
                            />
                        </FormControl>
                         <FormMessage/>
                    </FormItem>
                )}
  />
        <div className=" flex items-center gap-x-2">
            <Link href="/">
            <Button
            type = "button"
            variant= "ghost"
            
            
            >
                cancel
            </Button>
            </Link>
            <Button
            type="submit"
            disabled ={!isValid || isSubmitting}
            className={isValid ? "cursor-pointer" : "cursor-disabled"}

            >
            continue
            </Button>
            </div> 
       </form>
        </Form>
    </div>
        
    
        
        </div>
  )
}

export default CreateNew