package com.liu.blog.repository;

import org.hibernate.annotations.SQLUpdate;
import org.springframework.data.jpa.repository.JpaRepository;

import com.liu.blog.entity.Type;
import org.springframework.data.jpa.repository.Query;

public interface TypeRepository extends JpaRepository<Type, Integer> {



    @Query("update Type set typeName=? 1 where typeID=? 2 ")
    Type updateTypeName(Type type);


}
