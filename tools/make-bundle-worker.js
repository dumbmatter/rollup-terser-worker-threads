import { makeBundle } from "./make-bundle.js";
import { parentPort } from "node:worker_threads";

await makeBundle();

parentPort.postMessage("done");
