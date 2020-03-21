package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.User;

public interface UserRepository extends JpaRepository<User, String> {



//  根据userID寻找   status-->true
    User findByUserIDAndStatusTrue(String userID);



}
