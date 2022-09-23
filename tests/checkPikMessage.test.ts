import { describe, expect, it } from 'vitest';

import checkPikMessage from '../src/utils/checkPikMessage';

describe('check pik message', () => {
  it('should returns true', () => {
    expect(checkPikMessage('pik')).toEqual(true);
    expect(checkPikMessage('fik')).toEqual(true);
    expect(checkPikMessage('tupik')).toEqual(true);
    expect(checkPikMessage('tufik')).toEqual(true);
  });

  it('should returns true (Uppercase)', () => {
    expect(checkPikMessage('Pik')).toEqual(true);
    expect(checkPikMessage('Fik')).toEqual(true);
    expect(checkPikMessage('Tupik')).toEqual(true);
    expect(checkPikMessage('Tufik')).toEqual(true);
  });

  it('should returns false', () => {
    expect(checkPikMessage('pik apa kabar?')).toEqual(false);
    expect(checkPikMessage('fik sehat?')).toEqual(false);
    expect(checkPikMessage('tupik keur naon?')).toEqual(false);
    expect(checkPikMessage('tufik, wooooooooooooyyy')).toEqual(false);
  });

  it('should returns false (Uppercase)', () => {
    expect(checkPikMessage('Pik apa kabar?')).toEqual(false);
    expect(checkPikMessage('Fik sehat?')).toEqual(false);
    expect(checkPikMessage('Tupik keur naon?')).toEqual(false);
    expect(checkPikMessage('Tufik, wooooooooooooyyy')).toEqual(false);
  });
});
