import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //     data:{
  //         username: "pongge",
  //         password: "ponffdsaf",
  //         role: "STUDENT",

  //     }
  // })
  // await prisma.studenProfile.create({
  //     data:{
  //         companyName: "Pea",
  //         jobTitle: "Foreman",
  //         level: "noob",
  //         userId: "8cb9667d-ca8c-4c1d-a8f0-481fabb722da"
  //     }
  // })
  // const user = await prisma.user.findUnique({
  //     where:{
  //         username: "pa"
  //     },
  //     include:{
  //         studenProfile: {
  //             select:{
  //                 companyName: true //เลือกเอาแค่ company
  //             }
  //         }
  //     }
  // })
  // console.log(user)
  //   const course = await prisma.course.create({
  //     data: {
  //       courseName: "Angular",
  //       description: "Angular is loreamfdsmemfdsafmam",
  //     },
  //   });

  //   console.log(course);

  //   const user = await prisma.user.findUnique({
  //     where: {
  //       username: "pa",
  //     },
  //   });

  //   const course = await prisma.course.findFirst({
  //     where: {
  //       courseName: "Express",
  //     },
  //   });

  //   if (!user || !course) {
  //     console.log("false");
  //     return;
  //   }

  //   const sonc = await prisma.sudenOnCourse.create({
  //     data: {
  //       userId: user?.id,
  //       courseId: course?.id,
  //     },
  //   });

  //   console.log(sonc);

  const res = await prisma.user.findUnique({
    where: {
      username: "pa",
    },
    include: {
      SudentOnCourse: {
        include: {
          course: {
            select: {
              courseName: true,
            },
          },
        },
      },
    },
  });

  //   const result = await prisma.course.findFirst({
  //     where: {
  //       courseName: "Express",
  //     },
  //     include: {

  //       SudentOnCourse: true,
  //     },
  //   });

  console.log(res?.SudentOnCourse[0].course);
}

main()
  .then(() => console.log("done"))
  .finally(async () => {
    await prisma.$disconnect();
  });
