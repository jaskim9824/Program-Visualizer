# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# The file contains the functions needed to extract the course group 
# information needed to generate the web page

def findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList):
    intitalSelectionGroups = list(courseGroupDict.values())[0]
    intitalCourseGroupVals = {}
    for element in courseGroupList:
        if element not in intitalSelectionGroups:
            intitalCourseGroupVals[element] = ""
        else:
            intitalCourseGroupVals[element] = intitalSelectionGroups[element][0]
    return intitalCourseGroupVals

def findListofAllCourseGroups(courseGroupDict):
    currentList = []
    for plan in courseGroupDict:
        for element in courseGroupDict[plan]:
            if element not in currentList:
                currentList.append(element)
    return currentList

def extractPlanCourseGroupDict(sequnceDict):
    courseGroupDict = {}
    for plan in sequnceDict:
        index = plan.find("{")
        if index != -1:
            shortenedPlanName = plan[0:index].strip()
        else:
            shortenedPlanName = plan
        if shortenedPlanName not in courseGroupDict:
            courseGroupDict[shortenedPlanName] = {}
        courseGroupList = extractCourseGroupListFromString(plan)
        if courseGroupList == []:
            continue
        planCourseGroupsDict = courseGroupDict[shortenedPlanName]
        courseGroupDict[shortenedPlanName] = appendCourseGroups(planCourseGroupsDict,courseGroupList)
    return courseGroupDict

def appendCourseGroups(planCourseGroupsDict, courseGroupList):
    for group in courseGroupList:
        numOfGroup = int(''.join(filter(lambda s: (s.isdigit()), group)))
        if numOfGroup not in planCourseGroupsDict:
            planCourseGroupsDict[numOfGroup] = []
        if group not in planCourseGroupsDict[numOfGroup]:
            planCourseGroupsDict[numOfGroup].append(group)
    return planCourseGroupsDict

def extractCourseGroupListFromString(planName):
    index = planName.find("{")
    if index == -1:
        return []
    endIndex = planName.find("}")
    return planName[index+1:endIndex].split()