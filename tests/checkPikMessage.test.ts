import { describe, expect, it } from 'vitest';

import checkPikMessage from '../src/utils/checkPikMessage';

describe('check pik message', () => {
  it('should match with pik', () => {
    expect(checkPikMessage('pik')).to.be.true;
  });
  it('should match with fik', () => {
    expect(checkPikMessage('fik')).to.be.true;
  });
  it('should match with tupik', () => {
    expect(checkPikMessage('tupik')).to.be.true;
  });
  it('should match with tufik', () => {
    expect(checkPikMessage('tufik')).to.be.true;
  });
  it('should match with Pik', () => {
    expect(checkPikMessage('Pik')).to.be.true;
  });
  it('should match with Fik', () => {
    expect(checkPikMessage('Fik')).to.be.true;
  });
  it('should match with Tupik', () => {
    expect(checkPikMessage('Tupik')).to.be.true;
  });
  it('should match with Tufik', () => {
    expect(checkPikMessage('Tufik')).to.be.true;
  });
});
