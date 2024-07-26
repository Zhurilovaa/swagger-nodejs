import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerAutogen from "swagger-autogen";

const _dirname = dirname(fileURLToPath(import.meta.url));

const doc = {
  // общая информация
  info: {
    title: "Todo API",
    description: "My todo API",
  },
  // что-то типа моделей
  definitions: {
    // модель задачи
    Todo: {
      id: "1",
      text: "test",
      done: false,
    },
    // модель массива задач
    Todos: [
      {
        // ссылка на модель задачи
        $ref: "#/definitions/Todo",
      },
    ],
    // модель объекта с текстом новой задачи
    Text: {
      text: "test",
    },
    // модель объекта с изменениями существующей задачи
    Changes: {
      changes: {
        text: "test",
        done: true,
      },
    },
  },
  host: "localhost:3000",
  schemes: ["http"],
};

// путь и название генерируемого файла
const outputFile = join(_dirname, "output.json");
// массив путей к роутерам
const endpointsFiles = [join(_dirname, "../server.js")];

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(
  ({ success }) => {
    console.log(`Generated: ${success}`);
  }
);
