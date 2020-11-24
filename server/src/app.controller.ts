import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/ai/upload')
  @UseInterceptors(FileInterceptor('file'))
  postImage(@UploadedFile() file): Record<string, unknown> {
    return this.appService.postImage(file);
  }

  @Post('/api/ai/search')
  postSearch(@Body('search') query: string): Record<string, unknown> {
    return this.appService.postSearch(query);
  }
  @Get('/api/meme/:id')
  getId(@Param('id') id: string): Record<string, unknown> {
    return this.appService.getId(id);
  }
}
