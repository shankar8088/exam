package com.example.Exam.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Exam.Model.Student;

@Repository
public interface  StudRepo extends JpaRepository<Student, Integer> {

}
    

