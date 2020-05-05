package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface UserRepository extends JpaRepository<User, Integer> {


    //  根据userID寻找   status-->true
    List<User> findByUserNameAndStatusTrue(String userName);


    List<User> findByUserNameContains(String searchContent);

    @Query("update User set userPWD=?1 where userID=?2")
    @Modifying
    int updateUserPWD(String content, int userID);

    @Query("update User set phone=?1 where userID=?2")
    @Modifying
    int updatePhone(String content, int userID);

    @Query("update User set wechat=?1 where userID=?2")
    @Modifying
    int updateWechat(String newPWD, int userID);

    @Query("update User set email=?1 where userID=?2")
    @Modifying
    int updateEmail(String newPWD, int userID);

    //修改个人信息
    @Query("update User set userName=?1,gender=?2,name=?3,introduction=?4 where userID=?5")
    @Modifying
    int updateInfo(String userName, String gender, String name, String introduction, int userID);

}
