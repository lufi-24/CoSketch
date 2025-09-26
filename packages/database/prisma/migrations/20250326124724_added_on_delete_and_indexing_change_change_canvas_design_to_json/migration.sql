/*
  Warnings:

  - Changed the type of `design` on the `Canvas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Canvas" DROP CONSTRAINT "Canvas_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Canvas" DROP CONSTRAINT "Canvas_userId_fkey";

-- AlterTable
ALTER TABLE "Canvas" DROP COLUMN "design",
ADD COLUMN     "design" JSONB NOT NULL;

-- CreateIndex
CREATE INDEX "Canvas_roomId_userId_idx" ON "Canvas"("roomId", "userId");

-- CreateIndex
CREATE INDEX "Room_id_adminId_idx" ON "Room"("id", "adminId");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
