-- CreateTable
CREATE TABLE "County" (
    "country_id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "energy_cons" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "County" ADD CONSTRAINT "County_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
