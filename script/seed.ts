const {PrismaClient}= require("@prisma/client")
const database = new PrismaClient()

const main = async()=> {
    try {


        await database.category.createMany({
            data: [
                {name : "Front-end development "},
                {name : "UX/UI design"},
                {name : "Forms with React-hook-form"},
                 {name : "Mongo db"},
                 {name : "Next js"},
                 {name : "AI"},
                 {name : "Interview tips"},
                 {name : "UI library"},
                 {name : "Redux"},
                 {name : "Node js"},
                 
              
        
               
            ]
        })
        console.log("sucess")
    } catch (error){

        console.log("Error seeding the database categories", error)

    } finally {
        await database.$disconnect()
    }

}
main()