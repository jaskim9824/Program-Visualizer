function json_courses = parseExcel(filename)
% Parses one Excel file with the name "filename". Returns the data
% as a string following the .json file format
%
% Arguments:
%   filename (string): The name of the Excel file to parse. Must end in the
%   file extension .xls
%
% Returns:
%   json_courses (string): The contents of the Excel file, parsed and
%   encoded in the .json file format.
%
% Author: Zachary Schmidt, UAlberta, Summer 2022

    course_table = readtable(filename, "PreserveVariableNames", true);

    rows = height(course_table);

    % convert the table to struct array
    course_struct = table2struct(course_table);

    % Output text stream for json encoding
    json_courses = "";

    for i = 1:rows
        % JSON does not like percent symbol or double quotes
        course_struct(i).CourseDescription = strrep(course_struct(i).CourseDescription, "%", " percent");
        course_struct(i).CourseDescription = strrep(course_struct(i).CourseDescription, '"', '');

        % To convert these values to double, uncomment. Removes leading 0
        % course_struct(i).CourseID = str2double(course_struct(i).CourseID);
        % course_struct(i).EffDate = datestr(course_struct(i).EffDate, "mm/dd/yy");
        % course_struct(i).Calc_FeeIndex = str2double(course_struct(i).Calc_FeeIndex);

        next_course = jsonencode(course_struct(i));
        json_courses = append(json_courses, next_course);
    end
end