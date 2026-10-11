import { Injectable } from '@nestjs/common';
 
@Injectable()
export class CourseService {
  getAllCourses(): string {
    
    return 'Get AIUB Courses';
  }
 
  getCourseById(id: string): string {
    return `Get Course for ID: ${id}`;
  }
 
  createCourse(): string {
    return 'Course created';
  }
 
  updateCourse(id: string): string {
    
    return `course Update ${id}`;
  }
 
  patchCourse(id: string): string {
    return `Patch Course ${id}`;
  }
 
  deleteCourse(id: string): string {
    return `Course delete ${id}`;
  }
}
