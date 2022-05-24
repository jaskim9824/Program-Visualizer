from bs4 import BeautifulSoup

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

            # TODO:  insert different radio inputs here based on plan sequence in form tag

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