-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "imageUrl" TEXT,
    "link" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
