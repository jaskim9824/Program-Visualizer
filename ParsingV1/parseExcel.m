function json_courses = parseExcel(filename)
    course_table = readtable(filename, "PreserveVariableNames", true);

    rows = height(course_table);

    % convert the table to struct array
    course_struct = table2struct(course_table);

    % Output text stream for json encoding
    json_courses = "";

    for i = 1:rows
        course_struct(i).CourseDescription = strrep(course_struct(i).CourseDescription, "%", " percent");
        course_struct(i).CourseDescription = strrep(course_struct(i).CourseDescription, '"', '');
        % formatting data (converting strings to ints where appropriate)

        % To convert these values to double, uncomment. Removes leading 0
        % course_struct(i).CourseID = str2double(course_struct(i).CourseID);
        % course_struct(i).EffDate = datestr(course_struct(i).EffDate, "mm/dd/yy");
        % course_struct(i).Calc_FeeIndex = str2double(course_struct(i).Calc_FeeIndex);

        next_course = jsonencode(course_struct(i));
        json_courses = append(json_courses, next_course);
    end
end