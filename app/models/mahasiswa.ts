"use server"
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

// BUat variable "Prisma"
// const prisma = new PrismaClient();
const prisma = new PrismaClient();

export async function getData() {
    // membuat variabel mahasiswa
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
      where: {
        status: "Y",
        // prodi :{
          //   contains: 'Sastra'
          // }
        },
      });
      
      return mahasiswa;
    }

    // Buat fungsi arrow function
    export const deleteMahasiswa = async(idparameter:number,)=>{
        const deleteData = await prisma.tb_mahasiswa.update({
            where: {
              id: idparameter,
            },
            data: {
              status: 'T',
            },
          })
          return deleteData;
    }