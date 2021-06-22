import { setupWorker } from 'msw';
import handlers from './handlers';

// export defualt로 분리시 에러.
export const worker = setupWorker(...handlers);

