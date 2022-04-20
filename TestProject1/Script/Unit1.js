//USEUNIT CustomFunctions


function Test1()
{
  Browser = ProjectSuite.Variables.TestData1.Value("Browser");
AppUrl = ProjectSuite.Variables.TestData1.Value("TestURL")
   CustomFunctions.openNewBrowser(Browser,AppUrl);
 // Browsers.Item(btChrome).Navigate("https://www.hcplc.org/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageHillsboroughCountyPublicLibr.header.link.Click();
  let page = browser.pageGetACard;
  page.Wait();
  if ( browser.pageHillsboroughCounty.Exists)
  {
    page.header.nav.link.textnode2.Click();
  }
  else 
  {
    
  
  aqObject.CheckProperty(page.textnode, "contentText", cmpEqual, "Apply Online");
  page.header.nav.link.textnode2.Click();
  let page2 = browser.pageBooks;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Books & More");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageResearch;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Learning & Research");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageEvents;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Featured Events");
  page2.header.nav.link.Click();
  page2 = browser.pageServices;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Services");
  page2.header.nav.link.Click();
  page2 = browser.pageLocations;
  page2.Wait();
  aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "Locations");
  page2.header.nav.link.textnode2.Click();
  page2 = browser.pageAbout;
  page2.Wait();
  var bExist =aqObject.CheckProperty(page2.textnode, "contentText", cmpEqual, "About the Hillsborough County Public Library Cooperative");
  page2.header.link.Click();
  page.Wait();
  page.link2.Click();
  browser.pageHcplcBibliocommonsCom.Wait();
  }
  return bExist ;
}

function Test1driver()
{      
// close all open browsers
 CustomFunctions.closeBrowser()
// Clear cache and cookies
CustomFunctions.clearBrowserCookies()
//create report and table and header
CustomFunctions.fn_createreportfile("SYS");
// Get project name
      CustomFunctions.fn_createprojectnamerow(CustomFunctions.fn_getprojectName()+"Test1" );

   
      
      //define variables and constants
  const PASS=1;
  const FAIL=0;
  var passfail;    
  var actualResult;
  var passfailArray = []; 
  var i =0;


var actualResult;

 if (Unit1.Test1())
 {
   
       actualResult = "Able to click on links in Home page."
       CustomFunctions.fn_createteststep(1,"Verify user able to click all links in home page.","Able to click on links in Home page.",actualResult,false);
     }
     else
     {
        actualResult = "<B> Not </B> able to click on links in Home page."
        CustomFunctions.fn_createteststep(0,"Verify user able to click all links in home page.","Able to click on links in Home page.",actualResult,false);
     }
     
 
     
  
     
 
  
 
 CustomFunctions.fn_generatehighlevelreport("SYS");

   }  

function Test2()
{
  Browser = ProjectSuite.Variables.TestData2.Value("Browser");
AppUrl = ProjectSuite.Variables.TestData2.Value("TestURL")

CustomFunctions.openNewBrowser(Browser,AppUrl);
  let browser =  Aliases.browser
  browser.BrowserWindow.Maximize();
  let page = browser.pageHcplcBibliocommonsCom;
  let searchBox = page.formDesktopSearchForm;
  let searchBox2 =searchBox.textboxCatalog
  searchBox2.Click();
  searchBox2.SetText("Harry Potter");
  searchBox.buttonCatalogsubmit.Click();
  page.Wait();
  aqObject.CheckProperty(page.sectionContent.textnode2, "contentText", cmpEqual, "Harry Potter");
  page.link.textnode3.Click();
  var bExist =aqObject.CheckProperty(browser.pageCatalogAccountHelpHelpWithHo.articlePost5.header.textnode, "contentText", cmpEqual, "Catalog and Account Help");
  browser.BrowserWindow2.Close();
  return bExist ;
}

function Test2driver()
{      
// close all open browsers
 CustomFunctions.closeBrowser()
// Clear cache and cookies
CustomFunctions.clearBrowserCookies()
//create report and table and header

CustomFunctions.fn_createreportfile("SYS");
// Get project name
      CustomFunctions.fn_createprojectnamerow(CustomFunctions.fn_getprojectName()+"Test2" );

   
      
      //define variables and constants
  const PASS=1;
  const FAIL=0;
  var passfail;    
  var actualResult;
  var passfailArray = []; 
  var i =0;
  

var actualResult;

 
     
 aqUtils.Delay(2000)
     
  if (Unit1.Test2())
 {
   
       actualResult = "Able to Search the book with keyword."
       CustomFunctions.fn_createteststep(1,"Verify user able to search the book.","Able to Search the book with keyword.",actualResult,false);
     }
     else
     {
        actualResult = "<B> Not </B> able to Search the book with keyword.."
        CustomFunctions.fn_createteststep(0,"Verify user able to search the book.","Able to Search the book with keyword.",actualResult,false);
     }
     
 
  
CustomFunctions.fn_generatehighlevelreport("SYS");

   }