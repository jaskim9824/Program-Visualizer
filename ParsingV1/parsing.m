% Converts .xls file with course info to .json file
% Running instructions: place this file in the same folder as
% the excel sheet containing all the MecE course data. This excel file must
% be named "RO_COURSES_BY_DEPT_OR_FACULTY_9951.xls".
% Run this script in Matlab. A new file will be created called parsed.json
% in the same folder. This contains all the course data from the excel
% file.

% convert excel sheet to matlab table
in_file = "RO_COURSES_BY_DEPT_OR_FACULTY_ALL_ENG.xls";
course_table = readtable(in_file, "PreserveVariableNames", true);

rows = height(course_table);

% convert the table to struct array
course_struct = table2struct(course_table);

% Output text stream for json encoding
json_courses = "";

for i = 1:rows
    % formatting data (converting strings to ints where appropriate)

    % To convert these values to double, uncomment. Removes leading 0
    % course_struct(i).CourseID = str2double(course_struct(i).CourseID);
    % course_struct(i).EffDate = datestr(course_struct(i).EffDate, "mm/dd/yy");
    % course_struct(i).Calc_FeeIndex = str2double(course_struct(i).Calc_FeeIndex);

    next_course = jsonencode(course_struct(i));
    json_courses = append(json_courses, next_course);
end

out_file = "parsed.json";
fid = fopen(out_file, "w");
fprintf(fid, json_courses);

fclose("all");