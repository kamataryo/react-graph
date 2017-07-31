import 'mocha'
import * as React from 'react'
import { shallow } from 'enzyme'
import Edge from '../../../src/components/Edge'

describe('Test of Calender component', () => {
  it('should render given date', () => {
    const wrapper = shallow(<Edge to='1' from='2' />)
    console.log(wrapper)
  })

})
