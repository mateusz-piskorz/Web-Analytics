/*
  Warnings:

  - Added the required column `href` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hrefLabel` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "href" TEXT NOT NULL,
ADD COLUMN     "hrefLabel" TEXT NOT NULL;
