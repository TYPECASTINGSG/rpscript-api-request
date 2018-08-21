import {expect} from 'chai';
import m from 'mocha';

import RPSRequest from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Request', () => {

  m.it('should extract data', async function () {
    let req = new RPSRequest;
    let url = "https://gist.githubusercontent.com/wei3hua2/36112a3ebcc0d92ebb2f7b2753ae41ac/raw/67eff3f7c81c74b4e25ab2e5d557b91e748c3c4c/hello.rps";

    let output = await req.request(new RpsContext,{},url);
    
    console.log(output);

    let fn = await req.request(new RpsContext,{});
    let result = await fn(url);

    console.log(result);

    expect(output).to.be.equals(result);

  }).timeout(0);

})
