from parsing import parse

filename = "parsed.json"
course_seq, course_obj_dict = parse(filename)
i = 0
print(course_seq["Traditional Program"]["Term 1"][0].catalog)
print("")

for plan in course_seq:
    print(plan)
    for term in course_seq[plan]:
        print(term)
        for course in course_seq[plan][term]:
            if course == "Complementary Elective":
                print("Complementary Elective")
                print("")
                continue
            if course == "Program/Technical Elective":
                print("Program/Technical Elective")
                print("")
                continue
            if course == "ITS Elective":
                print("ITS Elective")
                print("")
                continue
            print(course.name)
            print("Prereqs:")
            print(course.prereqs)
            print("Coreqs:")
            print(course.coreqs)
            print("Reqsuisites:")
            print(course.reqs)
            print("")