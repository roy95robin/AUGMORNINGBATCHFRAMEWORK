

// Allure Reports 

/*
Playwright supports multiple inbuilt reports like
Line, list, dot, html, blob etc.. 

Allure is a custom third party report supported inside playwright

It's a advance report which represent every details in pictorial view. 

// Installation of an Allure. 
1. npm install --save-dev allure-commandline
2. npm install --save-dev allure-playwright
3. Add the allure report in the config file. 
     reporter: [['html'],['allure-playwright']]

    *** Allure will create it's own folder when we run the testcase for the first time 
    execute the code for first time. 
    post execution allure-result folder will get created. 
    Open the allure report using below commands
        npx allure serve allure-results

        run the below command line in terminal to generate the history 
        npx allure generate allure-results --clean-o allure report

        allure report folder will be created 
        Copy the history folder from allure report and put it inside the allure results
        Now run the testcase again 


*/