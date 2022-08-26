import Minibase from "./minibase-sdk.js";
import {MB_APPNAME, MB_APIKEY} from '$env/static/private'

let appName = MB_APPNAME
let apiKey = MB_APIKEY

export default new Minibase(appName, apiKey, {mode: 'online'})