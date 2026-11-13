
// Hooks in Playwright

/*
Hooks - special method performs setup and teardown process. 

Different types of hooks in playwright:: 
1. test.beforeAll()--it will get executed before any of the testcase 
    Ex: Db connection , initiate the reports and logs

2. test.beforeEach()*** -- it will run before every testcase 
    ex: launch browser

3. test.afterEach() - it will also after every testcase 
    ex: closing the browser. 

4. test.afterAll() -- it will execute once all the testcase execution is completed 
    ex: closing of db connection, generation of reports

Sequence of execution:: 
1 2 3 4
test.beforeEach()- is the one that will be used mostly in organisations. 


*/

import {test,expect} from '@playwright/test'

// execution flow
test.afterEach(async() =>{
    console.log('After each');
})
test.afterAll(async() =>{
    console.log('After all');
})
test.beforeAll(async() =>{
    console.log('Before all');
})
test.beforeEach(async() =>{
    console.log('Before each');
})

test('test1', async()=>{
    console.log('testcase 1');
})
test('test2', async()=>{
    console.log('testcase 2');
})
test('test3', async()=>{
    console.log('testcase 3');
})