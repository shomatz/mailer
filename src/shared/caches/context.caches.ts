import NodeCache from "node-cache";
export const contextCache = new NodeCache({ stdTTL: 86400 });
