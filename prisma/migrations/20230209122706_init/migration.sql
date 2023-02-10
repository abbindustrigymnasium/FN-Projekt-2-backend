/*
  Warnings:

  - You are about to drop the column `energy_cons_cap` on the `Country` table. All the data in the column will be lost.
  - Added the required column `code` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "energy_cons_cap",
ADD COLUMN     "code" TEXT NOT NULL;
