from bs4 import BeautifulSoup

# Function that places the radio inputs into the form
# Parameters:
#   formTag - form HTML tag where inputs will be placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
# TO DO: add some error handling to this function
def placeRadioInputs(formTag, sequenceDict, soup):
    for plan in sequenceDict:
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": plan})
        labelTag = soup.new_tag("label", attrs={"for":plan})
        breakTag = soup.new_tag("br")
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        formTag.append(breakTag)

def main ():
    #opening the template html file and constructing html
    try:
        with open("template.html") as input:
            # deriving parsed html
            soup = BeautifulSoup(input, 'html.parser')
            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")
            # print("Main")
            # print(mainTag)

            # locating form tag
            formTag = mainTag.find("form")
            # print("Form")
            # print(formTag)

            # test radio sequence
            testPlanseq = {"PlanA":1, "PlanB":2, "PlanC":3, "PlanD":4}
            placeRadioInputs(formTag, testPlanseq, soup)

            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            # print("Display")
            # print(displayTag)

            # TODO: insert course divs here
    #TO DO: improve expection handling here
    except:
        print("Exception raised")
    #writing output to an output html
    try:
        with open("template-output.html", "w") as output:
            output.write(str(soup))
    #TO DO: improve expection handling here
    except:
        print("Exception raised")
        
if __name__ == "__main__":
    main()