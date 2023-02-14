-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "energy_cons" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevInfo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "duties" TEXT NOT NULL,
    "ImageURL" TEXT NOT NULL,

    CONSTRAINT "DevInfo_pkey" PRIMARY KEY ("id")
);
