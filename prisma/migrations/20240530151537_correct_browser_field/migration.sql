/*
  Warnings:

  - You are about to drop the column `Browser` on the `Analytic` table. All the data in the column will be lost.
  - Added the required column `browser` to the `Analytic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytic" DROP COLUMN "Browser",
ADD COLUMN     "browser" TEXT NOT NULL;
