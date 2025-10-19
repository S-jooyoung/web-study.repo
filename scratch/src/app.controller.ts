import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("")
  getRootRoute() {
    return "hi there!";
  }

  @Get("hello")
  getHelloRoute() {
    return "hello world!";
  }
}
