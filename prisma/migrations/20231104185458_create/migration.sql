-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_number" TEXT NOT NULL,
    "address_district" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "copy" (
    "id" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,

    CONSTRAINT "copy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rent" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "copy_book_id" TEXT NOT NULL,
    "rent_day" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_day" TIMESTAMP(3) NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "rent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "books_id_key" ON "books"("id");

-- CreateIndex
CREATE UNIQUE INDEX "books_ISBN_key" ON "books"("ISBN");

-- CreateIndex
CREATE UNIQUE INDEX "copy_id_key" ON "copy"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rent_id_key" ON "rent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rent_copy_book_id_key" ON "rent"("copy_book_id");

-- AddForeignKey
ALTER TABLE "copy" ADD CONSTRAINT "copy_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rent" ADD CONSTRAINT "rent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rent" ADD CONSTRAINT "rent_copy_book_id_fkey" FOREIGN KEY ("copy_book_id") REFERENCES "copy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
