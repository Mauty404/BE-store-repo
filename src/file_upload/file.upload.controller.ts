import { Controller, Post, Req, Res } from '@nestjs/common';
import { FileUploadService } from './file.upload.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { uploadFile } from './uploadFile.decorator';

@ApiTags('file upload')
@Controller('fileupload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @uploadFile('filename')
  async create(@Req() req, @Res() res) {
    try {
      await this.fileUploadService.fileupload(req, res);
    } catch (error) {
      return res
        .status(500)
        .json(`Failed to upload image file: ${error.message}`);
    }
  }
}
