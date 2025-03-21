import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getHello(): string {
    return `The App ${this.configService.get("APP_NAME")} is running on port ${this.configService.get("PORT")}`;
  }
}
