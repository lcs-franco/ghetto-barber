/*
  Warnings:

  - Made the column `image_url` on table `Service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "image_url" SET NOT NULL;
