"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tela_1 = __importDefault(require("./Tela"));
const d = new Tela_1.default();
d.mostra(1234);
d.clear();
d.mostra(4321);
