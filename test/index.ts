import {expect} from 'chai';
import m from 'mocha';

import RPSRequest from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Request', () => {

  m.it('should extract data', async function () {
    let req = new RPSRequest;

    let output = await req.request(new RpsContext,{},"http://www.google.com.sg");
    
    console.log(output);

  }).timeout(0);

})
