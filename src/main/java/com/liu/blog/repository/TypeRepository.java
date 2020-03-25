package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {


//    @Query("update Type set typeName=? 1 where typeID=? 2 ")
//    Type updateTypeName(Type type);


    @Query("select a from Type a where a.user.userID=?1")
    List<Type> backByUserID(int userID);

}
