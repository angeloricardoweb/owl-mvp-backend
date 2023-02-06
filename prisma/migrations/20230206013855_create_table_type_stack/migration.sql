-- CreateTable
CREATE TABLE `type_stacks` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('Frontend', 'Backend', 'Mobile', 'DevOps', 'QA', 'PM', 'Design') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
