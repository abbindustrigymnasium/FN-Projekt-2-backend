-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "ProfileImageURL" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");
