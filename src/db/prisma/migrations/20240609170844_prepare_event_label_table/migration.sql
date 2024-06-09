/*
  Warnings:

  - You are about to drop the column `category` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "category",
DROP COLUMN "createdAt",
DROP COLUMN "label",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'dwa';

-- CreateTable
CREATE TABLE "EventLabel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EventLabel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventLabel" ADD CONSTRAINT "EventLabel_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
