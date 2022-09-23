import { describe, expect, it } from 'vitest';

import checkThanksMessage from '../src/utils/checkThanksMessage';

describe('check thanks message', () => {
  it("should returns you're welcome", () => {
    expect(checkThanksMessage('thanks')).toEqual("You're welcome");
    expect(checkThanksMessage('Thanks')).toEqual("You're welcome");
    expect(checkThanksMessage('thank you')).toEqual("You're welcome");
    expect(checkThanksMessage('Thank you')).toEqual("You're welcome");
  });

  it('should returns Sama-sama', () => {
    expect(checkThanksMessage('terima kasih')).toEqual('Sama-sama');
    expect(checkThanksMessage('Terima kasih')).toEqual('Sama-sama');
    expect(checkThanksMessage('makasih')).toEqual('Sama-sama');
    expect(checkThanksMessage('Makasih')).toEqual('Sama-sama');
  });

  it('should returns Sami-sami', () => {
    expect(checkThanksMessage('nuhun')).toEqual('Sami-sami');
    expect(checkThanksMessage('Nuhun')).toEqual('Sami-sami');
    expect(checkThanksMessage('hatur nuhun')).toEqual('Sami-sami');
    expect(checkThanksMessage('Hatur Nuhun')).toEqual('Sami-sami');
  });

  it('should returns null', () => {
    expect(checkThanksMessage('tank')).toBeNull();
    expect(checkThanksMessage('Tank')).toBeNull();
    expect(checkThanksMessage('tanks')).toBeNull();
    expect(checkThanksMessage('Tanks')).toBeNull();
    expect(checkThanksMessage('makasi')).toBeNull();
    expect(checkThanksMessage('Makasii')).toBeNull();
    expect(checkThanksMessage('hatur tengkyu')).toBeNull();
  });
});
