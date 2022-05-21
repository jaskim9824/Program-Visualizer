from parsing import parse

filename = "parsed.json"
courses = parse(filename)
for course in courses:
    print(course)
    print(courses[course].course_id)
    print("Prereqs:")
    print(courses[course].prereqs)
    print("Coreqs:")
    print(courses[course].coreqs)
    print("Reqsuisites:")
    print(courses[course].reqs)
    print("")