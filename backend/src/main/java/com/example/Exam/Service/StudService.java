package com.example.Exam.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Exam.Model.Student;
import com.example.Exam.Repository.StudRepo;

@Service
public class StudService {

    @Autowired
       StudRepo repo;

    public List<Student> getAllStudents()
    {
         return repo.findAll();
    }

    public void addStudent(Student s) {

        repo.save(s);
    }
    public void deleteStud(Integer id)
    {
        repo.deleteById(id);
    }
  
    public void updateStudent(Student x)
    {
        repo.save(x);
    }
        
}
