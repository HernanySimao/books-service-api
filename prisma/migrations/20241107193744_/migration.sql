-- CreateTable
CREATE TABLE "Book" (
    "int" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "code" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_code_key" ON "Book"("code");
