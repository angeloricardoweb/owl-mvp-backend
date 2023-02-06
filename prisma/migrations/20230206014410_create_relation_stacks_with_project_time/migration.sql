/*
  Warnings:

  - You are about to alter the column `name` on the `type_stacks` table. The data in that column could be lost. The data in that column will be cast from `Enum("type_stacks_name")` to `VarChar(191)`.
  - A unique constraint covering the columns `[name]` on the table `type_stacks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `project_times` ADD COLUMN `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `type_stack_id` VARCHAR(191) NOT NULL DEFAULT '1';

-- AlterTable
ALTER TABLE `type_stacks` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `type_stacks_name_key` ON `type_stacks`(`name`);

-- AddForeignKey
ALTER TABLE `project_times` ADD CONSTRAINT `project_times_type_stack_id_fkey` FOREIGN KEY (`type_stack_id`) REFERENCES `type_stacks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
