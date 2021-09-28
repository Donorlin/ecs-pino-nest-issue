import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import ecsFormat from '@elastic/ecs-pino-format';

@Module({
  imports: [LoggerModule.forRoot({ pinoHttp: { ...ecsFormat({ convertReqRes: true }) } })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
