import { formatJsonRpcRequest } from 'rpc-json-utils';

import { JsonRpcProvider } from '../src';

describe('rpc-json-provider', () => {
  // ---------- Provider ----------------------------------------------- //

  it('JsonRpcProvider', async () => {
    const provider = new JsonRpcProvider('https://api.mycryptoapi.com/eth');
    const result = await provider.request(
      formatJsonRpcRequest('eth_chainId', [])
    );
    expect(result).toBeTruthy();
    expect(result).toEqual('0x1');
  });
});
