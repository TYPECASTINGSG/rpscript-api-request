/**
 * @module Request
 */

import requestPromise from 'request-promise';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("request")
export default class RPSRequest {

  @rpsAction({verbName:'request'})
  async request (ctx:RpsContext,opts:Object, url:any) : Promise<any>{
    return requestPromise(url);
  }
  
}