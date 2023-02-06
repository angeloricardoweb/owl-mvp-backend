/*
  Warnings:

  - You are about to drop the column `projectId` on the `project_times` table. All the data in the column will be lost.
  - You are about to drop the column `type_stack_id` on the `project_times` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `project_times` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `project_times` DROP FOREIGN KEY `project_times_type_stack_id_fkey`;

-- AlterTable
ALTER TABLE `project_times` DROP COLUMN `projectId`,
    DROP COLUMN `type_stack_id`,
    DROP COLUMN `userId`,
    ADD COLUMN `project_name` VARCHAR(191) NOT NULL DEFAULT 'Não informado',
    ADD COLUMN `stack_name` VARCHAR(191) NOT NULL DEFAULT 'Não informado',
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL DEFAULT 'Não informado';
