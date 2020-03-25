package com.liu.blog.service.admin;


import com.liu.blog.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.liu.blog.entity.Admin;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;


    //登录
    public Admin loginCheck(String adminID, String adminPWD) {
        Admin admin = adminRepository.findAdminByAdminIDAndStatusTrue(adminID);
        if (admin.getAdminPWD().equals(adminPWD)) {
            return admin;
        } else {
            return null;
        }
    }


}
