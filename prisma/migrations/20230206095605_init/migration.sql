/*
  Warnings:

  - Added the required column `Year` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "Year" INTEGER NOT NULL;
