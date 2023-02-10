-- DropForeignKey
ALTER TABLE "Population" DROP CONSTRAINT "Population_country_name_fkey";

-- DropIndex
DROP INDEX "Country_name_key";
