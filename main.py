from bs4 import BeautifulSoup

def main ():
    print("Hello world!")
    try:
        with open("template.html") as fp:
            soup = BeautifulSoup(fp, 'html.parser')
            print("File opened!")
    except:
        print("Exception raised")
    

if __name__ == "__main__":
    main()