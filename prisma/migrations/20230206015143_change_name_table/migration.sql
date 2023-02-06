/*
  Warnings:

  - You are about to drop the `type_stacks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `project_times` DROP FOREIGN KEY `project_times_type_stack_id_fkey`;

-- DropTable
DROP TABLE `type_stacks`;

-- CreateTable
CREATE TABLE `stacks` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `stacks_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `project_times` ADD CONSTRAINT `project_times_type_stack_id_fkey` FOREIGN KEY (`type_stack_id`) REFERENCES `stacks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
