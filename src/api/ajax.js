import axios from "axios"
import {responsive} from "../../../vue-devtools-dev/src/devtools/plugins/responsive";
export default function ajax( url,data={},type = "GET" ) {
  return  new Promises(function (resolve,reject) {
    let promise
    if (type === "GET"){
      let dataStr = ""
      Object.keys(data).forEach(key=>{
        dataStr += key + "=" + data[key] + "&"
      })
      if (type !== ""){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise=axios.get(url,data)
    }
    else {
      promise = axios.post(url,data);
    }
    promise.then(response=>{
      resolve(response.data);
    }).catch(error=>{
      reject(error);
    })
  })
}
