"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const bodyParser = __importStar(require("body-parser"));
const inversify_express_utils_1 = require("inversify-express-utils");
const ioc_1 = require("./ioc/ioc");
// Force discovery of any injectables in the application
require("./ioc/loader");
const server = new inversify_express_utils_1.InversifyExpressServer(ioc_1.container);
server.setConfig((app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
});
const PORT = 1337;
const app = server.build();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map