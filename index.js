const yargs = require("yargs");
const task = require("./task")

const options = yargs
    .usage("Usage: -t <due>")
    .option("t", { alias: "task", describe: "Task list", type: "string", demandOption: true })
    .argv;


switch (options.task) {
    case "overdue":
        task.Overdue();
        break;
    case "next":
        task.Next()
        break;
    case "today":
        task.Today()
        break;
    default:
        console.log("Available: -t overdue -t today  & -t next")
        break;


}