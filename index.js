<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GPA Calculator</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <h1>GPA Calculator</h1>
  <form action="/grades" method="post">
    <div id="courses">
      <div class="course">
        <input type="text" name="course" placeholder="Course Name" required>
        <input type="text" name="grade" placeholder="Grade" required>
        <input type="number" name="credits" placeholder="Credits" required>
      </div>
    </div>
    <button type="button" onclick="addCourse()">Add Course</button>
    <button type="submit">Calculate GPA</button>
  </form>
  <script>
    function addCourse() {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'course';
      courseDiv.innerHTML = `
        <input type="text" name="course" placeholder="Course Name" required>
        <input type="text" name="grade" placeholder="Grade" required>
        <input type="number" name="credits" placeholder="Credits" required>
      `;
      document.getElementById('courses').appendChild(courseDiv);
    }
  </script>
  <h2>Grades</h2>
  <ul>
    <% grades.forEach(grade => { %>
      <li><%= grade.course %> - <%= grade.grade %> - <%= grade.credits %> credits</li>
    <% }) %>
  </ul>
</body>
</html>
