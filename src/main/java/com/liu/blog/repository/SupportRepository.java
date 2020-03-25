package com.liu.blog.repository;

import com.liu.blog.entity.Support;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SupportRepository extends JpaRepository<Support,Integer> {
}
