import {api} from "./service.js";

const PREFIX = "/v2/casaos";
const option = {
	getOptionStatus() {
		return api.get(`${PREFIX}/option`);
	},
}
export default option;
