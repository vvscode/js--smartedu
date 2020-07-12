import React from "react";

const CoursesListItem = ({ course }) => (
  <div className="card mb-4">
    <div className="card-body">
      <div className="row">
        <div className="col-3">
          <img
            src={`https://dummyimage.com/300x200/f1/${course.id}.jpg&text=${course.title}`}
            className="img-fluid"
            alt="Course image"
          />
        </div>
        <div className="col-9">
          <p className="float-right">
            Теги: {course.tags.map((el) => el.title).join(", ")}
          </p>
          <h2 className="h5">{course.title}</h2>
          <p>{course.description}</p>
          <a
            href={`/course/${course.id}/`}
            className="btn btn-outline-primary btn-sm mr-3 mb-2"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  </div>
);

const CoursesList = (props) => (
  <ul>
    {props.courses.map((el) => (
      <CoursesListItem course={el} key={el.id} />
    ))}
  </ul>
);

export default CoursesList;
