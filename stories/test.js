import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Test', module)
  .add(
    'with text',
    () => (
      <h1>Test storybook!</h1>
    )
  )
