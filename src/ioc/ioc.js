"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const container = new inversify_1.Container();
exports.container = container;
const provide = inversify_binding_decorators_1.makeProvideDecorator(container);
exports.provide = provide;
//# sourceMappingURL=ioc.js.map