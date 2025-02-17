import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// путь к текущей директории
const _dirname = dirname(fileURLToPath(import.meta.url));

// путь к файлу с фиктивными данными
const file = join(_dirname, "data.json");

const adapter = new JSONFile(file);
const db = new Low(adapter, {});

export default db;
