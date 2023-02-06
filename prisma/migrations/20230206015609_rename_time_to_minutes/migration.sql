/*
  Warnings:

  - You are about to drop the column `time` on the `project_times` table. All the data in the column will be lost.
  - Added the required column `minutes` to the `project_times` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project_times` DROP COLUMN `time`,
    ADD COLUMN `minutes` INTEGER NOT NULL;
