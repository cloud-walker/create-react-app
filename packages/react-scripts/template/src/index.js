import React from 'react'
import {render} from 'react-dom'

import {Root} from './features/Root'
import registerServiceWorker from './registerServiceWorker'

render(<Root />, document.getElementById('root'))
registerServiceWorker()
