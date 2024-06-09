/*
  Warnings:

  - You are about to drop the column `projectId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `EventLabel` table. All the data in the column will be lost.
  - Added the required column `projectName` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventName` to the `EventLabel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_projectId_fkey";

-- DropForeignKey
ALTER TABLE "EventLabel" DROP CONSTRAINT "EventLabel_eventId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "projectId",
ADD COLUMN     "projectName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "projectId",
ADD COLUMN     "projectName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EventLabel" DROP COLUMN "eventId",
ADD COLUMN     "eventName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventLabel" ADD CONSTRAINT "EventLabel_eventName_fkey" FOREIGN KEY ("eventName") REFERENCES "Event"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
