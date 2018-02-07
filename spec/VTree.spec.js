import Vue from 'vue'
import VTree from '../src/index.js'
 
Vue.config.productionTip = true; // Turn off production message so it doesn't show in command window.
 
describe('VTree', () => {
  it('has a created hook', () => {
    expect(typeof VTree.created).toBe('function')
  })
});