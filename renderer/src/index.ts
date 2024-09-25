import { Api, testApi } from "./apiTest.js";
import * as comlink from "./base/comlink.js";
//import { MainElement } from "./mainElement.js";
//import { LoginElement } from "./loginElement.js";
//import { RegisterElement } from "./registerElement.js";
//import { EventElement } from "./eventElement.js";
//import { BasicTemplate } from "./basicTemplate.js";
//import { ToDoList } from "./todoList.js";
//import { MyElement } from "./listingWithMap.js";
import { RepeatPattern } from "./svgShapes.js";
declare global {
  interface Window {
    comlink: typeof comlink;
  }
}
  
window.comlink = comlink;

async function run() {
  document.body.appendChild(new RepeatPattern());
  comlink.setDefaultTimeout(10000);
  await comlink.exposeApi(new Api(), "", "main");
  await comlink.exposeApi(() => {
    console.log("reload");
    setTimeout(() => location.reload(), 100);
  }, "reload", "main");
  let api = await comlink.getApi<Api>();
  await testApi(api);
}
run().catch(console.log);