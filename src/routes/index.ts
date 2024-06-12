import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (__filename: string) => {
  const file = __filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((__filename) => {
  const cleanName = cleanFileName(__filename);
  if (cleanName !== "index") {
    console.log(cleanName);
  }
});

export { router };
