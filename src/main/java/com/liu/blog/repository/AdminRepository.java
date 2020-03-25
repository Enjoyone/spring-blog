package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.liu.blog.entity.Admin;
import org.springframework.stereotype.Repository;

@Repository

public interface AdminRepository extends JpaRepository<Admin,String> {



    Admin findAdminByAdminIDAndStatusTrue(String adminID);

}
