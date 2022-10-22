import express from 'express';
import { LICENSE_KEY } from '../../constants';
import Store from '../../models/Store';

export default function getHandler(
  defaultHandler: express.Handler,
  eeHandler: express.Handler
): express.Handler {
  return async (...args) => {
    const key = await Store.get(LICENSE_KEY);
    if (!key?.value) {
      return defaultHandler(...args);
    }
    return eeHandler(...args);
  };
}
