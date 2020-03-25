package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface UserRepository extends JpaRepository<User, Integer> {



//  根据userID寻找   status-->true
    List<User> findByUserNameAndStatusTrue(String userName);



}
