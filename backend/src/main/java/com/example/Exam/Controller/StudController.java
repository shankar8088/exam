package com.example.Exam.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Exam.Model.Student;
import com.example.Exam.Service.StudService;

@RestController
public class StudController {

    @Autowired
    StudService service;

    @GetMapping("/student/get")

    public List<Student> getStud()
    {
       return service.getAllStudents();
    }

    @PostMapping("/student/post")
    public void ddddStud(@RequestBody Student s)
     {
        service.addStudent(s);
     }
     @DeleteMapping("/student/delete")

     public void dels(@RequestBody Integer id)
     {
        service.deleteStud(id);
     }

   @PutMapping("/student/update")
   public void stup(@RequestBody Student x)
   {
    service.updateStudent(x);
   }

















    }
     
    

