import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.country.createMany({
    data: {
    },
  })

  const allCountries = await prisma.country.findMany({
    include: {
      population_id: true,
      population_name: true
    },
  })
  console.dir(allCountries, { depth: null })

  const deleteUsers = await prisma.country.deleteMany({})
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