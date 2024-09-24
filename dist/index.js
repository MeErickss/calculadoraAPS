"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const display_1 = __importDefault(require("./display"));
const d = new display_1.default();
d.showNumber(1234);
d.clear();
d.showNumber(4321);
