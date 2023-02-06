-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "energy_cons" INTEGER NOT NULL,
    "energy_cons_cap" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "population_count" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Population" (
    "country_id" INTEGER NOT NULL,
    "country_name" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "pop_per_sqkm" INTEGER NOT NULL,
    "num_of_houses" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Population_country_id_key" ON "Population"("country_id");

-- AddForeignKey
ALTER TABLE "Population" ADD CONSTRAINT "Population_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Population" ADD CONSTRAINT "Population_country_name_fkey" FOREIGN KEY ("country_name") REFERENCES "Country"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
