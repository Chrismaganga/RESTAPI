// {
//    "name": "restAPi",
//    "version": "0.0.1",
//    "description": "Awesome project developed with TypeORM.",
//    "type": "commonjs",
//    "devDependencies": {
//       "@types/node": "^16.11.10",
//       "ts-node": "10.9.1",
//       "typescript": "4.5.2"
//    },
//    "dependencies": {
//       "@types/bcrypt": "^5.0.2",
//       "@types/express": "^5.0.0",
//       "@types/jsonwebtoken": "^9.0.7",
//       "@types/memory-cache": "^0.2.6",
//       "bcrypt": "^5.1.1",
//       "concurrently": "^9.0.1",
//       "dotenv": "^16.4.5",
//       "express": "^4.21.1",
//       "jsonwebtoken": "^9.0.2",
//       "memory-cache": "^0.2.0",
//       "pg": "^8.4.0",
//       "reflect-metadata": "^0.1.13",
//       "typeorm": "0.3.20"
//    },
//    "scripts": {
//       "start": "ts-node src/index.ts",
//       "typeorm": "typeorm-ts-node-commonjs"
//    }
// }
// import { NextFunction, Request, Response } from "express";
// import { AppDataSource } from "../data-source";
// import { User } from "../entity/User.entity";

// export const authorization = (roles: string[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const userRepo = AppDataSource.getRepository(User);
//     const user = await userRepo.findOne({
//       where: { id: req[" currentUser"].id },
//     });
//     console.log(user);
//     if (!roles.includes(user.role)) {
//       return res.status(403).json({ message: "Forbidden" });
//     }
//     next();
//   };
// };