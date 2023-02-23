import { PrismaClient } from '@prisma/client'
import { CountryData } from '../Data/countryData'
import { DevData } from '../Data/DevData'
import { userData } from '../Data/userData'


const prisma = new PrismaClient()

async function main() {

  const deleteCountry = await prisma.country.deleteMany({})
  console.log({deleteCountry})


  const deleteDevs = await prisma.devInfo.deleteMany({})
  console.log({deleteDevs})

  
  const deleteUsers = await prisma.user.deleteMany({})
  console.log({deleteUsers})




  // <------------------- Create CountryData ---------------------->

  const countryData = await prisma.country.createMany({
    data: CountryData
    })
    console.log({countryData})



  // <------------------- Create DeveloperData ---------------------->
  
  const developerData = await prisma.devInfo.createMany({
    data: DevData
  })

  console.log(developerData)



  // <--------------------- Create UserData --------------------------->

  const UserData = await prisma.user.createMany({
    data: userData
    })
    console.log({UserData})

  }

  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
