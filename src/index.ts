import requestPromise from 'request-promise';
import request from 'request';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Module for making http call
 * @see {@link https://www.npmjs.com/package/request-promise}
 * @namespace Request
 * 
 * @example
 * rps install request
*/
@RpsModule("request")
export default class RPSRequest {

/**
 * @function request
 * @memberof Request
 * @example
 * ; GET the content of google.com
 * request "http://www.google.com"
 *
 * @param {string} url url
 * @param {*} options refer to request-promise documentation.
 * @summary request :: String → String
 * 
 * @see {@link https://www.npmjs.com/package/request-promise}
 * 
*/
  @rpsAction({verbName:'request'})
  async request (ctx:RpsContext,opts:any, url?:string) : Promise<any|Function>{
    function req(url) {
      opts['uri'] = url;
      return requestPromise(opts);
    }

    if(!url) return req;
    else return req(url);
  }
  
}
