import morgan from "morgan";
import { NODE_ENV } from "../configs/index";
import { stream } from "./logger";

export default morgan(NODE_ENV === "dev" ? "tiny" : "combined", {
  stream: stream,
});
