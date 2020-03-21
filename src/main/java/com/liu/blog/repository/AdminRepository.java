package com.liu.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.liu.demo.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin,String> {



    Admin findAdminByAdminIDAndStatusTrue(String admingID);
}
