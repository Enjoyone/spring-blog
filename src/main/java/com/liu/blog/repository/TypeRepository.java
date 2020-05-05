package com.liu.blog.repository;

import com.liu.blog.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.Type;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {


//    @Query("update Type set typeName=? 1 where typeID=? 2 ")
//    Type updateTypeName(Type type);


    @Query("select a from Type a where a.user.userID=?1")
    List<Type> backByUserID(int userID);

    @Query("update Type set typeName=?1 where typeID=?2")
    @Modifying
    int updateType(String typeName,int typeID);


    @Query("select a from Article a where a.type.typeID=?1")
    List<Article> backByTypeID(int typeID);
}
