import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

import "./__mocks__/fetch-mock";
import "./__mocks__/window-mock";
afterEach(() => {
  cleanup()
});
