import { describe, expect, it } from 'vitest';

import checkThanksMessage from '../src/utils/checkThanksMessage';

describe('check thanks message', () => {
  it("thanks should returns you're welcome", () => {
    expect(checkThanksMessage('thanks')).toEqual("You're welcome");
  });
  it("Thanks should returns you're welcome", () => {
    expect(checkThanksMessage('Thanks')).toEqual("You're welcome");
  });
  it("thank you should returns you're welcome", () => {
    expect(checkThanksMessage('thank you')).toEqual("You're welcome");
  });
  it("Thank you should returns you're welcome", () => {
    expect(checkThanksMessage('Thank you')).toEqual("You're welcome");
  });
  it('terima kasih should returns Sama-sama', () => {
    expect(checkThanksMessage('terima kasih')).toEqual('Sama-sama');
  });
  it('Terima kasih should returns Sama-sama', () => {
    expect(checkThanksMessage('Terima kasih')).toEqual('Sama-sama');
  });
  it('makasih should returns Sama-sama', () => {
    expect(checkThanksMessage('makasih')).toEqual('Sama-sama');
  });
  it('Makasih should returns Sama-sama', () => {
    expect(checkThanksMessage('Makasih')).toEqual('Sama-sama');
  });
  it('nuhun should returns Sami-sami', () => {
    expect(checkThanksMessage('nuhun')).toEqual('Sami-sami');
  });
  it('Nuhun should returns Sami-sami', () => {
    expect(checkThanksMessage('Nuhun')).toEqual('Sami-sami');
  });
});
