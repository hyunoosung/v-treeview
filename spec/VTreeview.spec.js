import Vue from 'vue'
import VTreeview from '../src/index.js'
 
Vue.config.productionTip = false; // Turn off production message so it doesn't show in command window.
 
describe('VTreeview', () => {
  it('has a created hook', () => {
    expect(typeof VTreeview.created).toBe('function')
  })
});